import React from "react";
import Bunga from "@/public/modernCulture/bunga.png";
import BungaKiri from "@/public/modernCulture/bungakiri.png";
import Image from "next/image";
import {
  Inter,
  Mirza,
  Cardo,
  Purple_Purse,
  Passions_Conflict,
} from "next/font/google";
import Laki from "@/public/modernCulture/laki.png";
import Perempuan from "@/public/modernCulture/perempuan.png";
import Aksen from "@/public/modernCulture/profileaksen.png";
import AksenBawah from "@/public/modernCulture/aksenbawah.png";
import Akad from "@/public/modernCulture/akad.png";
import BgAkad from "@/public/modernCulture/bgakad.png";
import AksenAkad from "@/public/modernCulture/aksenakad.png";
import AksenAkad2 from "@/public/modernCulture/aksenakadlagi.png";
import HitungMundur from "@/public/modernCulture/hitungmundur.png";
import Aksenitung from "@/public/modernCulture/aksenmundur.png";
import Aksenitung2 from "@/public/modernCulture/aksenmundur2.png";

const inter = Inter({ subsets: ["latin"] });
const mirza = Mirza({ subsets: ["latin"], weight: "400" });
const cardo = Cardo({ subsets: ["latin"], weight: "400" });
const purple_purse = Purple_Purse({ subsets: ["latin"], weight: ["400"] });
const passion_conflict = Passions_Conflict({
  subsets: ["latin"],
  weight: ["400"],
});
const ModernCulture = () => {
  return (
    <main>
      <section id="landing">
        <div
          className={`flex bg-[#1C0A00] flex-col w-full h-screen justify-center items-center overflow-hidden text-white relative`}
        >
          <div className="absolute bottom-0 w-[30%]">
            <Image src={Bunga} alt="bunga" />
          </div>
          <div className="absolute left-0 top-0 w-[10%]">
            <Image src={BungaKiri} alt="bunga" />
          </div>
          <div className="absolute right-0 top-0 w-[10%] -scale-x-100">
            <Image src={BungaKiri} alt="bunga" />
          </div>
          <div className="absolute left-0 bottom-0 w-[10%] -scale-y-100">
            <Image src={BungaKiri} alt="bunga" />
          </div>
          <div className="absolute right-0 bottom-0 w-[10%] -scale-100">
            <Image src={BungaKiri} alt="bunga" />
          </div>
          {/* End Gambar */}
          <div className={`text-4xl ${passion_conflict.className}`}>
            <div>The Wedding Of</div>
          </div>

          <div className={`text-5xl ${purple_purse.className}`}>
            <div>Ahmad & Mutiara</div>
          </div>

          <div className={`text-2xl mt-10 ${cardo.className}`}>
            <div>14 September 2024</div>
          </div>
        </div>
      </section>

      <section id="profile">
        <div className="w-full relative h-screen bg-[#1C0A00] flex flex-col justify-center items-center text-white">
          {/* gambar */}
          <div className="w-[20%] absolute left-0 top-0">
            <Image src={Aksen} alt="aksen" />
          </div>
          <div className="w-[20%] absolute right-0 top-0 -scale-x-100">
            <Image src={Aksen} alt="aksen" />
          </div>
          <div className="w-[18%] absolute left-0 bottom-0">
            <Image src={AksenBawah} alt="aksen" />
          </div>
          <div className="w-[18%] absolute right-0 bottom-0 -scale-x-100">
            <Image src={AksenBawah} alt="aksen" />
          </div>
          <div className="w-[30%] absolute bottom-0 opacity-20 -scale-x-100">
            <Image src={Bunga} alt="aksen" />
          </div>

          {/* End gambar */}
          <div className={`text-5xl ${passion_conflict.className}`}>
            We Are Getting Married
          </div>
          <div className="flex items-center mt-5">
            <div className="w-full flex flex-col items-center">
              <div className="w-[50%]">
                <Image src={Laki} alt="" />
              </div>
              <div className={`text-3xl mt-4 ${purple_purse.className}`}>
                Ahmad Almayda S.Kom
              </div>
              <div className={`text-xl ${mirza.className}`}>
                Putra ke-2 dari Bapak Fikri Raihan & Ibu Ayu Lestari
              </div>
            </div>
            <div className={`text-8xl -mt-6 ${mirza.className}`}>&</div>
            <div className="w-full flex flex-col items-center">
              <div className="w-[50%]">
                <Image src={Perempuan} alt="" />
              </div>
              <div className={`text-3xl mt-4 ${purple_purse.className}`}>
                Mutiara Deviana O.Y S.Kom
              </div>
              <div className={`text-xl ${mirza.className}`}>
                Putra ke-2 dari Bapak Fikri Raihan & Ibu Ayu Lestari
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="akad">
        <div className="relative flex w-full bg-[#1C0A00] flex-col justify-center items-center h-screen text-white">
          <div className="w-full absolute h-screen overflow-hidden">
            <Image src={BgAkad} alt="" />
          </div>
          <div className="w-[30%] left-0 bottom-0 absolute">
            <Image src={AksenAkad} alt="" />
          </div>
          <div className="w-[30%] right-0 bottom-0 absolute">
            <Image src={AksenAkad2} alt="" />
          </div>
          <div className={`text-8xl ${passion_conflict.className}`}>
            Akad Nikah
          </div>
          <div className="w-full">
            <div className="w-[45%] ml-10 pt-10 pl-14">
              <Image src={Akad} alt="" />
            </div>
          </div>
          <div className="w-full p-10">
            <div
              className={`text-4xl underline underline-offset-8 text-end ${mirza.className}`}
            >
              AYANA Midplaza Jakarta
            </div>
            <div className={`text-2xl text-end mt-5 ${mirza.className}`}>
              Jl. Jendral Sudirman, Karet Tengsin <br />
              Kecamatan Tanah Abang <br />
              Kota Jakarta Pusat
            </div>
          </div>
        </div>
      </section>

      <section id="countdown">
        <div className="relative flex gap-4 w-full bg-[#1C0A00] flex-col justify-center items-center h-screen text-white">
          <div className="w-[30%] absolute top-0 left-0">
            <Image src={Aksenitung} alt="" />
          </div>
          <div className="w-[30%] absolute bottom-0 right-0">
            <Image src={Aksenitung2} alt="" />
          </div>
          <div className={`text-7xl ${passion_conflict.className}`}>
            Hitung Mundur
          </div>
          <div className="w-[20%]">
            <Image src={HitungMundur} alt="" />
          </div>
          {/* Kotak - kotak */}
          <div className="flex gap-4 mt-3">
            <div>
              <div className="flex">
                <div className="bg-white p-4 rounded-2xl shadow-inner shadow-slate-700">
                  <div className={`text-4xl text-black ${cardo.className}`}>
                    10
                  </div>
                </div>
              </div>
              <div className={`text-center mt-2 text-2xl ${cardo.className}`}>
                Hari
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="bg-white p-4 rounded-2xl shadow-inner shadow-slate-700">
                  <div className={`text-4xl text-black ${cardo.className}`}>
                    20
                  </div>
                </div>
              </div>
              <div className={`text-center mt-2 text-2xl ${cardo.className}`}>
                Jam
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="bg-white p-4 rounded-2xl shadow-inner shadow-slate-700">
                  <div className={`text-4xl text-black ${cardo.className}`}>
                    10
                  </div>
                </div>
              </div>
              <div className={`text-center mt-2 text-2xl ${cardo.className}`}>
                Menit
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="bg-white p-4 rounded-2xl shadow-inner shadow-slate-700">
                  <div className={`text-4xl text-black ${cardo.className}`}>
                    10
                  </div>
                </div>
              </div>
              <div className={`text-center mt-2 text-2xl ${cardo.className}`}>
                Detik
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ModernCulture;
