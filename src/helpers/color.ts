function seededDiagonalGradientStyle(seed: string) {
  function mulberry32(a: any) {
    return function () {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Convert seed to number if string
  let seedNum =
    typeof seed === "string"
      ? [...seed].reduce((acc, c) => acc + c.charCodeAt(0), 0)
      : seed;

  const rand = mulberry32(seedNum);

  // --- Matte / muted HSL palette
  function mutedColor() {
    const hue = Math.floor(rand() * 360);
    const saturation = 25 + rand() * 15; // muted
    const lightness = 55 + rand() * 10; // matte
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  const color1 = mutedColor();
  const color2 = mutedColor();

  // Diagonal directions
  const directions = [
    "to top right",
    "to bottom right",
    "to bottom left",
    "to top left",
  ];

  const direction = directions[Math.floor(rand() * directions.length)];

  return {
    background: `linear-gradient(${direction}, ${color1}, ${color2})`,
  };
}


export default seededDiagonalGradientStyle