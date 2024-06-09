"use client";
import { useState, useEffect } from "react";
import { Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import MetodeAnimation from "../../../public/MetodeAnimation";
import LottieAnimasi from "/public/LottieAnimation";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Halaman() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <main
      className={`${roboto.className} bg-black text-white px-96 flex h-screen items-center justify-center`}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-80">
          <LottieAnimasi />
        </div>
      )}
      <div className="">
        <div className="pb-3 font-extrabold text-xl flex items-center justify-center gap-5">
          <div className="font-extrabold text-3xl flex items-end justify-center">
            USE CASE USULAN
          </div>
          <div className="font-extrabold text-xl flex items-center justify-center">
            <MetodeAnimation />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-center">
            <Image
              src="/img/use_case.png"
              alt="alt"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-7">
          <Link href={`/hasil_penelitian_pembahasan`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-left"></div>
            </div>
          </Link>
          <Link href={`/simpulan_saran`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-right"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
