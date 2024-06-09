"use client";
import { useState, useEffect } from "react";
import { Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import BackgroundAnimasi from "../../../public/BackgroundAnimation";
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
        <div className="pb-3 font-extrabold text-xl flex items-center justify-center gap-5">
          <div className="font-extrabold text-3xl flex items-end justify-center">
            BATASAN MASALAH
          </div>
          <div className="font-extrabold text-xl flex items-center justify-center">
            <BackgroundAnimasi />
          </div>
        </div>
        <div className="mt-5">
          <div className="text-xl mb-2 font-extrabold">
            Divisi Cooperation and Placement politeknik LP3I Kampus Tasikmalaya
          </div>
          <div className="bg-amber-200 border border-2 border-black hover:border-amber-400 hover:font-extrabold shadow-xl p-6 rounded-full flex gap-5 text-bold text-md">
            <div className="">Mengelola data relasi perusahaan</div>
            <div className="">Pengajuan sumber daya manusia (SDM)</div>
            <div className="">
              Menampilkan rekapitulasi pemetaan calon pegawai
            </div>
            <div className="">Tindak lanjut pada perusahaan</div>
          </div>
          <div className="text-xl flex items-center justify-end mt-3 mb-2 font-extrabold">
            Relasi Perusahaan
          </div>
          <div className="bg-amber-200 border border-2 border-black hover:border-amber-400 hover:font-extrabold flex items-center justify-end shadow-xl p-6 rounded-full gap-5 text-bold text-md">
            <div className="">Pemetaan sumber daya manusia (SDM)</div>
          </div>
          <div className="text-xl mt-5 mb-2 font-extrabold">
            Mahasiswa Politeknik LP3I Kampus Tasikmalaya
          </div>
          <div className="bg-amber-200 border border-2 border-black hover:border-amber-400 hover:font-extrabold shadow-xl p-6 rounded-full flex gap-5 text-bold text-md">
            <div className="">Pemantauan status pemetaan sumber daya manusia (SDM)</div>
          </div>
        </div>
        <div className="flex gap-2 mt-7">
          <Link href={`/rumusan_masalah`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-left"></div>
            </div>
          </Link>
          <Link href={`/metodologi`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-right"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
