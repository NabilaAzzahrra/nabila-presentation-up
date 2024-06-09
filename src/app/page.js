"use client";
import { useState, useEffect } from "react";
import { Roboto, Roboto_Mono, Poppins } from "next/font/google";
import Link from "next/link";
import LottieAnimasi from "/public/LottieAnimation";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`${poppins.className} px-20 md:px-52 `}>
      {/* {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-80">
          <LottieAnimasi />
        </div>
      )} */}
      <div className="flex flex-col md:flex-row h-screen items-center gap-5 justify-between ">
        <div className="mt-20 md:-mt-44">
          <p className="font-extrabold text-3xl mb-3 tracking-wider leading-relaxed text-sm md:text-3xl">
            SISTEM INFORMASI PENGELOLAAN PEMETAAN MAHASISWA BEKERJA{" "}
            <span className="text-amber-300">
              (STUDI KASUS POLITEKNIK LP3I KAMPUS TASIKMALAYA)
            </span>
          </p>
          <p className="font-bold text-sm md:text-xl">USULAN PROPOSAL / 03 Juni 2024</p>
          <p className="mt-3 font-bold tracking-widest text-md md:text-2xl text-amber-300">
            NABILA AZZAHRA
          </p>
          <p className="font-bold tracking-widest text-md md:text-xl">232101403</p>
        </div>
        <div className="mb-96 md:-mb-1">
          <div className="flex gap-2">
            <div className="h-20 md:h-52 w-20 md:w-52 bg-white rounded-full"></div>
            <div className="h-20 md:h-52 w-20 md:w-52 bg-sky-500 rounded-tr-[100px]"></div>
            <div className="h-20 md:h-52 w-20 md:w-52 bg-slate-200 rounded-tl-[100px]"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-20 md:h-52 w-[168px] md:w-[424px] bg-white rounded-tl-[100px] rounded-br-[100px] my-2"></div>
            <div className="h-20 md:h-52 w-20 md:w-52 bg-slate-200 rounded-bl-[100px] my-2"></div>
          </div>
        </div>
      </div>

      <Link href={`/pendahuluan`}>
        <div className="-mt-[650px] md:-mt-80 border border-2 hover:bg-amber-300 hover:border-black hover:text-black font-bold text-sm md:text-xl w-20 md:w-52 h-8 md:h-10 rounded-full items-center justify-center flex">
          Mulai
        </div>
      </Link>
    </main>
  );
}
