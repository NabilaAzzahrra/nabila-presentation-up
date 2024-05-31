"use client"
import { Roboto, Roboto_Mono, Poppins } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <main className={`${poppins.className} px-52 `}>
      <div className="flex h-screen items-center gap-60 justify-between ">
        <div className="">
          <p className="">USULAN PROPOSAL</p>
          <p className="">SISTEM INFORMASI PENGELOLAAN PEMETAAN MAHASISWA BEKERJA (STUDI KASUS POLITEKNIK LP3I KAMPUS TASIKMALAYA)</p>
          <p className="">NABILA AZZAHRA</p>
          <p className="">232101403</p>
        </div>
        <div className="">
          <div className="flex gap-2">
            <div className="h-52 w-52 bg-white rounded-full"></div>
            <div className="h-52 w-52 bg-sky-500 rounded-tr-[100px]"></div>
            <div className="h-52 w-52 bg-slate-200 rounded-tl-[100px]"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-52 w-[424px] bg-white rounded-tl-[100px] rounded-br-[100px] my-2"></div>
            <div className="h-52 w-52 bg-slate-200 rounded-bl-[100px] my-2"></div>
          </div>
        </div>
      </div>

      <Link href={`/pendahuluan`}>
        <div className="-mt-96 border border-2 w-52 h-10 rounded-full items-center justify-center flex">
          Mulai
        </div>
      </Link>
    </main>
  );
}
