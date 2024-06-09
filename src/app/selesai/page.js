"use client";
import { useState, useEffect } from "react";
import { Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import FinishAnimation from "../../../public/FinishAnimation";
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
      className={`${roboto.className} bg-white text-black px-96 flex h-screen items-center justify-center`}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-80">
          <LottieAnimasi />
        </div>
      )}
      <div className="">
        <div className=" font-extrabold text-xl">
          <div className="font-extrabold text-xl flex items-center justify-center">
            <FinishAnimation />
          </div>
          <div className="font-extrabold text-3xl -mt-20 flex items-end justify-center">
            TERIMA KASIH
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link href={`/tahap_pengumpulan_data`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-left"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
