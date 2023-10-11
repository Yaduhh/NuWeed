import React from "react";
import {
  Inter,
  Mirza,
  Cardo,
  Purple_Purse,
  Passions_Conflict,
  Petemoss,
} from "next/font/google";
import Image from "next/image";
import Wayang from "@/public/javanese/wayang.png";
import Awan from "@/public/javanese/awan.png";
import Ablur from "@/public/javanese/awanblur.png";
import Aksenpasangan from "@/public/javanese/aksenpasangan.png";
import Hiasanpasangan from "@/public/javanese/hiasanpasangan.png";
import Laki from "@/public/javanese/laki.png";
import Perempuan from "@/public/javanese/perempuan.png";
import Aksenakad from "@/public/javanese/aksenakad.png";
import Cincin from "@/public/javanese/cincin.png";
import Hariakad from "@/public/javanese/hariakad.png";
import Hiasanakad from "@/public/javanese/hiasanakad.png";
import Maps from "@/public/javanese/maps.png";
import Bgakad from "@/public/javanese/bgakad.png";
import Aksengaleri from "@/public/javanese/aksengaleri.png";
import Foto1 from "@/public/javanese/foto1.png";

const inter = Inter({ subsets: ["latin"] });
const petemoss = Petemoss({ subsets: ["latin"], weight: "400" });
const mirza = Mirza({ subsets: ["latin"], weight: "400" });
const cardo = Cardo({ subsets: ["latin"], weight: "400" });
const purple_purse = Purple_Purse({ subsets: ["latin"], weight: ["400"] });
const passion_conflict = Passions_Conflict({
  subsets: ["latin"],
  weight: ["400"],
});

const Javanese = () => {
  return (
    <>
      <section id="home">
        <div className="w-full relative h-screen flex max-sm:flex-col bg-[#6C6464] max-sm:justify-center max-sm:items-center">
          <div className="w-full absolute top-0">
            <Image src={Awan} alt="awan" />
          </div>
          <div className="w-[30%] absolute top-44 right-20">
            <Image src={Ablur} alt="awan" />
          </div>
          <div className="w-[40%]">
            <div className="w-[40%] max-sm:w-[70%] absolute bottom-0 left-0">
              <Image src={Wayang} alt="wayang" />
            </div>
          </div>
          <div
            className={`w-full pt-10 max-sm:pt-0 flex flex-col justify-center items-center text-white max-sm:-mt-20 ${passion_conflict.className}`}
          >
            <div className="text-5xl text-center">The Wedding Of</div>
            <div className={`text-8xl max-sm:text-6xl ${petemoss.className}`}>
              Dihyan & Andaruni
            </div>
            <div className={`text-4xl mt-6 ${petemoss.className}`}>
              12 Desember 2023
            </div>
          </div>
        </div>
      </section>

      <section id="pasangan">
        <div className="w-full relative h-screen flex z-0 flex-col justify-center items-center bg-[#6C6464] text-white">
          <div className="w-[30%] absolute top-0 left-0 -z-10">
            <Image src={Aksenpasangan} alt="aksen" />
          </div>
          <div className="w-[30%] absolute bottom-0 right-[30%] -z-10">
            <Image src={Hiasanpasangan} alt="aksen" />
          </div>
          <div
            className={`text-6xl max-sm:text-4xl ${passion_conflict.className}`}
          >
            We Are Getting Married
          </div>
          <div className="w-full flex justify-center items-center max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <div className="w-[50%] max-sm:w-full flex flex-col justify-center items-center">
              <div className="w-[70%]">
                <Image src={Laki} alt="laki" />
              </div>
              <div className={`text-3xl text-center ${cardo.className}`}>
                Dihyan Cokroatmojo
              </div>
              <div className={`text-xl text-center ${cardo.className}`}>
                Anak kelima dari Bapak John & Ibu Merliana
              </div>
            </div>
            <div
              className={`text-8xl max-sm:text-5xl text-center ${cardo.className}`}
            >
              &
            </div>
            <div className="w-[50%] max-sm:w-full flex flex-col justify-center items-center">
              <div className="w-[70%]">
                <Image src={Perempuan} alt="perempuan" />
              </div>
              <div className={`text-3xl text-center ${cardo.className}`}>
                Arundari Candrakanti
              </div>
              <div className={`text-xl text-center ${cardo.className}`}>
                Anak kelima dari Bapak Fikri & Ibu Ayu Lestari
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="akad">
        <div className="w-full relative h-screen flex gap-5 z-0 flex-col justify-center items-center bg-[#6C6464] text-white">
          <div className="w-[35%] absolute top-0 right-[25%]">
            <Image src={Aksenakad} alt="aksenakad" />
          </div>
          <div className="w-[20%] absolute bottom-0 left-0">
            <Image src={Hiasanakad} alt="aksenakad" />
          </div>
          <div className="w-full absolute bottom-20 max-sm:hidden left-0 -z-10">
            <Image src={Bgakad} alt="aksenakad" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[20%] max-sm:w-[55%] ml-28 max-sm:ml-20">
              <Image src={Cincin} alt="cincin" />
            </div>
            <div className={`text-7xl ${passion_conflict.className}`}>
              Akad Nikah
            </div>
          </div>
          <div className="w-[25%] max-sm:w-full ml-5">
            <Image src={Hariakad} alt="hariakad" />
          </div>
          <div className="w-[10%] max-sm:w-[50%]">
            <Image src={Maps} alt="hariakad" />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full relative h-screen flex gap-5 z-0 flex-col justify-center items-center bg-[#6C6464] text-white">
          <div className="w-[20%] absolute top-0 left-0">
            <Image src={Aksengaleri} alt="aksenakad" />
          </div>
          <div className="w-full absolute bottom-20 max-sm:bottom-0 left-0 -z-10">
            <Image src={Bgakad} alt="aksenakad" />
          </div>
          <div className={`text-7xl ${passion_conflict.className}`}>
            Galeri Kemesraan
          </div>
          <div className="w-full flex gap-3 items-center justify-center max-sm:flex-col">
            <div className="w-[30%] max-sm:w-[60%]">
              <Image src={Foto1} alt="foto" />
            </div>
            <div className="w-[30%] max-sm:w-[60%] -mt-10">
              <Image src={Foto1} alt="foto" />
            </div>
            <div className="w-[30%] max-sm:w-[60%] -mt-10">
              <Image src={Foto1} alt="foto" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full relative h-screen flex gap-5 z-0 flex-col justify-center items-center bg-[#6C6464] text-white">
          <div className="w-[30%] absolute left-0 bottom-0">
            <Image src={Wayang} alt="wayang" />
          </div>
          <div className="w-[30%] absolute right-0 bottom-0 -scale-x-100">
            <Image src={Wayang} alt="wayang" />
          </div>

          <div className={`text-7xl ${petemoss.className}`}>Hitung Mundur</div>
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
          <div className={`text-xl mt-10 ${cardo.className}`}>
            <button className="bg-[#434242] px-12 py-2 rounded-xl hover:bg-[#434242]">
              Tambahkan ke kalendar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Javanese;
