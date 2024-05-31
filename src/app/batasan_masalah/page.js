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
        <div className="pb-10">BATASAN MASALAH</div>
        <div className="">
          {/* <LottieAnimasi /> */}

          <Image src="/img/lp3i.png" alt="alt" width={300} height={300} />

          <div className="mt-10 text-justify">
            1. Mengelola data relasi perusahaan dan pengajuan sumber daya manusia (SDM), serta menampilkan rekapitulasi pemetaan calon pegawai dan tindak lanjut pada perusahaan dilakukan user divisi Cooperation and Placement politeknik LP3I Kampus Tasikmalaya.
          </div>
          <div className="mt-3 text-justify">
            2. Pemetaan sumber daya manusia (SDM) dilakukan user perusahaan dengan melakukan kecocokkan berkas dengan kualifikasi lowongan pekerjaan hal ini di lakukan.
          </div>
          <div className="mt-3 text-justify">
            3. Pemantauan status pemetaan sumber daya manusia (SDM) pada user mahasiswa.
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
