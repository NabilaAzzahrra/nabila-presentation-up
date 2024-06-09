"use client";
import { useState, useEffect } from "react";
import { Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import BackgroundAnimasi from "../../../public/BackgroundAnimation";
import Image from "next/image";
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
      className={`${roboto.className} bg-slate-50 text-black px-96 flex h-screen items-center justify-center`}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-80">
          <LottieAnimasi />
        </div>
      )}
      <div className="">
        <div className="pb-3 font-extrabold text-xl flex items-center justify-center gap-5">
          <div className="font-extrabold text-3xl flex items-end justify-center">
            LATAR BELAKANG PENELITIAN
          </div>
          <div className="font-extrabold text-xl flex items-center justify-center">
            <BackgroundAnimasi />
          </div>
        </div>
        <div className="mt-12">
          <div className="flex gap-5 items-center justify-between">
            <Image src="/img/lp3i.png" alt="alt" width={200} height={200} />
            <Image src="/img/gmu.png" alt="alt" width={150} height={10} />
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-10 bg-black text-white p-3 w-auto flex items-center justify-center rounded-full font-bold text-md hover:border hover:border-black hover:bg-white hover:text-black hover:border-2">
              <span className="text-amber-200 pr-1">360 Lebih </span>Relasi
              Perusahaan
            </div>
            <div className="mt-10 p-3 w-auto flex items-center justify-center rounded-full font-bold text-3xl">
              =
            </div>
            <div className="mt-10 bg-black text-white p-3 w-auto flex items-center justify-center rounded-full font-bold text-md hover:border hover:border-black hover:bg-white hover:text-black hover:border-2">
              <span className="text-amber-200 pr-1">280 Lebih </span>MoU
            </div>
            <div className="mt-10 p-3 w-auto flex items-center justify-center rounded-full font-bold text-3xl">
              &
            </div>
            <div className="mt-10 bg-black text-white p-3 w-auto flex items-center justify-center rounded-full font-bold text-md hover:border hover:border-black hover:bg-white hover:text-black hover:border-2">
              <span className="text-amber-200 pr-1">236 Lebih </span> Aktif
              Penempatan Kerja
            </div>
          </div>

          <div className="mt-5 font-bold text-xl">Permasalahan</div>
          <div className="flex gap-5 mt-5">
            <div className="flex gap-3">
              <div className="bg-sky-400 p-3 w-10 h-10 rounded-full flex items-center justify-center">
                1
              </div>
              <div className="bg-white w-[350px] p-2 border border-2 rounded-xl">
                kesulitan mengontrol data secara real-time
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-sky-400 p-3 w-10 h-10 rounded-full flex items-center justify-center">
                2
              </div>
              <div className="bg-white w-[350px] p-2 border border-2 rounded-xl">
                komunikasi sering tertumpuk di media sosial
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="bg-sky-400 p-3 w-10 h-10 rounded-full flex items-center justify-center">
              3
            </div>
            <div className=" bg-white  p-2 border border-2 rounded-xl">
              Berkas lamaran harus dibawa oleh mahasiswa yang masih menjadi
              kandidat, sehingga menambah biaya transportasi
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="bg-sky-400 p-3 w-10 h-10 rounded-full flex items-center justify-center">
              4
            </div>
            <div className="bg-white p-2 border border-2 rounded-xl">
              Rekapitulasi data penempatan dan tindak lanjut perusahaan belum
              real-time, sehingga keberhasilan dan penurunan penempatan tidak
              terpantau
            </div>
          </div>

        </div>
        <div className="flex gap-5 mt-7">
          <Link href={`/rumusan_masalah`}>
            <div className="h-10 w-10 bg-sky-400 rounded-full flex items-center justify-center">
              <div className="triangle-right"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
