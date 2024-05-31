"use client";
import { Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image"; // Sesuaikan path dengan struktur file Anda

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Halaman() {
  return (
    <main
      className={`${roboto.className} bg-white text-black px-96 flex h-screen items-center justify-center`}
    >
      <div className="">
        <div className="pb-10">RUMUSAN MASALAH</div>
        <div className="">
          {/* <LottieAnimasi /> */}

          <Image src="/img/lp3i.png" alt="alt" width={300} height={300} />

          <div className="mt-10 text-justify">
            1. Bagaimana sistem berjalan pemetaan mahasiswa bekerja dan pengelolaan data perusahaan di Cooperation and Placement Politeknik LP3I Kampus Tasikmalaya saat ini?
          </div>
          <div className="mt-3 text-justify">
            2. Apa hambatan-hambatan pada sistem pemetaan mahasiswa bekerja dan pengelolaan data perusahaan di C&P Politeknik LP3I Kampus Tasikmalaya saat ini?
          </div>
          <div className="mt-3 text-justify">
            3. Bagaimana solusi yang harus dilakukan guna menangani hambatan yang terdapat pada pemetaan mahasiswa bekerja dan pengelolaan data perusahaan di Cooperation and Placement Politeknik LP3I Kampus Tasikmalaya saat ini?
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
