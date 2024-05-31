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
        <div className="pb-3">METODOLOGI PENELITIAN</div>
        <div className="">
          {/* <LottieAnimasi /> */}
          <div className="mt-3 text-justify">
           Menggunakan Metodologi Sistem Development Life Cycle (SDLC)
          </div>
          <div className="mt-3 text-justify">
           Menggunakan Metode Prototype
          </div>
          <div className="mt-10 text-justify">
            <Image src="/img/Prototype.png" width={700} height={700}/>
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
