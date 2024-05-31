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
        <div className="pb-10">TAHAPAN PERUMUSAN MASALAH</div>
        <div className="">
          {/* <LottieAnimasi /> */}

          <Image src="/img/tahap_perumusan_masalah.png" alt="alt" width={600} height={600} />
        </div>
        <div className="flex gap-2 mt-7">
        <Link href={`/objek_waktu_penelitian`}>
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
