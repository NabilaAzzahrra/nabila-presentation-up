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
      className={`${roboto.className} bg-balck text-white px-96 flex h-screen items-center justify-center`}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-80">
          <LottieAnimasi />
        </div>
      )}
      <div className="">
        <div className="pb-3 font-extrabold text-xl flex items-center justify-center gap-5">
          <div className="font-extrabold text-3xl flex items-end justify-center">
            METODOLOGI
          </div>
          <div className="font-extrabold text-xl flex items-center justify-center">
            <MetodeAnimation />
          </div>
        </div>
        <div className="">
          <div className="mt-5 border border-2 border-white hover:border-amber-400 hover:font-extrabold shadow-xl p-6 rounded-full flex gap-5 text-bold text-md">
            <div className="">Sistem Development Life Cycle (SDLC) dengan metode Prototype</div>
          </div>
        </div>
        <div className="">
          <div className="mt-3 text-justify">
            <Image src="/img/Prototype.png" width={700} height={700} />
          </div>
        </div>
        <div className="flex gap-2 mt-7">
          <Link href={`/batasan_masalah`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-left"></div>
            </div>
          </Link>
          <Link href={`/objek_waktu_penelitian`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-right"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
