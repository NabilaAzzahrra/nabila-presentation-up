"use client";
import { Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import LottieAnimasi from "./LottieAnimation";
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
        <div className="pb-10">LATAR BELAKANG PENELITIAN</div>
        <div className="">
          {/* <LottieAnimasi /> */}

          <Image src="/img/lp3i.png" alt="alt" width={300} height={300} />

          <div className="mt-10 text-justify">
            Politeknik LP3I Kampus Tasikmalaya memiliki 360 relasi perusahaan,
            280 dengan MoU, dan 236 aktif dalam penempatan kerja. Divisi
            Cooperation and Placement kesulitan mengontrol data secara real-time
            dan komunikasi sering tertumpuk di media sosial. Berkas lamaran
            harus dibawa oleh mahasiswa, menambah biaya transportasi.
            Rekapitulasi data penempatan dan tindak lanjut perusahaan belum
            real-time, sehingga keberhasilan dan penurunan penempatan tidak
            terpantau. Penggunaan aplikasi sistem informasi diperlukan untuk
            mengatasi kendala dan meningkatkan kinerja divisi.
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
