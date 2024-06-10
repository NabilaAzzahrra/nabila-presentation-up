"use client";
import { useState, useEffect } from "react";
import { Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import MistakeAnimasi from "../../../public/MistakeAnimations";
import LottieAnimasi from "/public/LottieAnimation"; // Sesuaikan path dengan struktur file Anda

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
            RUMUSAN MASALAH
          </div>
          <div className="font-extrabold text-xl flex items-center justify-center">
            <MistakeAnimasi />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="bg-amber-200 text-black font-bold text-xl p-3 w-10 h-10 rounded-full flex items-center justify-center">
            1
          </div>
          <div className="p-6 text-xl border border-2 border-white hover:bg-amber-200 hover:text-black hover:border-black rounded-full">
            Bagaimana sistem berjalan pemetaan mahasiswa bekerja dan pengelolaan
            data perusahaan di Cooperation and Placement Politeknik LP3I Kampus
            Tasikmalaya saat ini?
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <div className="p-6 text-xl border border-2 bg-amber-200 border-white text-black hover:bg-white hover:text-black hover:border-black rounded-full">
            Apa hambatan-hambatan pada sistem pemetaan mahasiswa bekerja dan
            pengelolaan data perusahaan di C&P Politeknik LP3I Kampus
            Tasikmalaya saat ini?
          </div>
          <div className="bg-amber-200 border border-2 border-white text-black font-bold text-xl p-3 w-10 h-10 rounded-full flex items-center justify-center">
            2
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <div className="bg-amber-200 text-black font-bold text-xl p-3 w-10 h-10 rounded-full flex items-center justify-center">
            3
          </div>
          <div className="p-6 text-xl border border-2 border-white hover:bg-amber-200 hover:text-black hover:border-black rounded-full">
            Bagaimana solusi yang harus dilakukan guna menangani hambatan yang
            terdapat pada pemetaan mahasiswa bekerja dan pengelolaan data
            perusahaan di Cooperation and Placement Politeknik LP3I Kampus
            Tasikmalaya saat ini?
          </div>
        </div>

        <div className="flex gap-2 mt-7">
          <Link href={`/pendahuluan`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-left"></div>
            </div>
          </Link>
          <Link href={`/batasan_masalah`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-right"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
