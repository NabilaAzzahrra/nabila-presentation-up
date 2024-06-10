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
            SIMPULAN DAN SARAN
          </div>
          <div className="font-extrabold text-xl flex items-center justify-center">
            <MetodeAnimation />
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-4">
            <div className="font-bold text-xl mb-3 flex items-center justify-center">
              Simpulan
            </div>
            <div className="mb-3 text-xl text-center text-wrap">
            Sistem sebelumnya masih menggunakan file terpisah dan belum terintegrasi. Hambatan yang ada meliputi pengelolaan data yang tidak rapi dan informasi lambat. Solusi yang diusulkan adalah pembuatan aplikasi pengolahan data relasi perusahaan untuk mengatasi hambatan-hambatan tersebut.
            </div>
          </div>
          <div className="">
            <div className="font-bold text-xl mb-3 flex items-center justify-center">
              Saran
            </div>
            <div className="mb-3 text-xl text-center text-wrap">
            Karena aplikasi Sistem Informasi Relasi Perusahaan (SiRP) ini masih sederhana, maka penulis menyarankan untuk dapat dilakukan pengembangan lebih lanjut dikarenakan terdapat beberapa fitur yang belum tersedia seperti update profile, laporan triwulan, target penempatan, serta dari segi tampilan supaya lebih baik lagi. Dikarenakan penulis tidak menggunakan framework versi terbaru, penulis menyarankan untuk menggunakan framework lain yang memiliki hasil dan kinerja yang lebih baik daripada framework yang digunakan oleh penulis.
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-7">
          <Link href={`/use_case_usulan`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-left"></div>
            </div>
          </Link>
          <Link href={`/selesai`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-right"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
