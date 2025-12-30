import seededDiagonalGradientStyle from "@/helpers/color";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div 
    className="bg-slate-900"
    >
      <div className="space-y-3 p-4">
      <div className="flex justify-center">
        <Image
          className="w-32 h-32"
          src={"/logo.png"}
          alt="logo"
          width={150}
          height={150}
        ></Image>
      </div>

      <h1 className="text-3xl font-bold text-center text-white">
        Cornerstone Community Church Yangon
      </h1>
        <p>Choose your number</p>
      </div>
      <div className="grid grid-cols-4 gap-2 p-3">
        {Array.from({ length: 150 }).map((n, i) => (
          <Link href={`/${i + 1}`} key={i}>
            <div className="border rounded-md w-[4fr] flex items-center justify-center m-5 max-sm:m-0" style={{
              aspectRatio: "1/1"
            }}>
              <p
                className="text-3xl font-bold"
                style={{
                  ...seededDiagonalGradientStyle(String(i)),
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {i + 1}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
