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
import AksenGaleri from "@/public/modernCulture/aksengaleri.png";
import Foto1 from "@/public/modernCulture/foto1.png";
import Foto2 from "@/public/modernCulture/foto2.png";
import Foto3 from "@/public/modernCulture/foto3.png";
import Gbawahkanan from "@/public/modernCulture/galeribawahkanan.png";
import Gbawahkiri from "@/public/modernCulture/galeribawahkiri.png";
import Tamukiri from "@/public/modernCulture/ataskiritamu.png";
import Tamukanan from "@/public/modernCulture/ataskanantamu.png";
import BawahTamu from "@/public/modernCulture/bawahtamu.png";
import Giftatas from "@/public/modernCulture/giftatas.png";
import Giftbawah from "@/public/modernCulture/giftbawah.png";
import BCA from "@/public/modernCulture/bca.png";
import BRI from "@/public/modernCulture/bri.png";
import Kado from "@/public/modernCulture/kado.png";
import Aksenucapan from "@/public/modernCulture/aksenucapan.png";
import Aksenucapanbawah from "@/public/modernCulture/aksenucapanbawah.png";
import Komentar from "@/public/modernCulture/komentar.png";
import Aksenlovestory from "@/public/modernCulture/aksenlovestory.png";
import Story1 from "@/public/modernCulture/story1.png";
import Story2 from "@/public/modernCulture/story2.png";
import Aksenbawahstory from "@/public/modernCulture/aksenbawahstory.png";
import Bgakadmobile from "@/public/modernCulture/bgakadMobile.png";

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

          <div className={`text-5xl max-sm:text-3xl ${purple_purse.className}`}>
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
          <div className="flex items-center mt-5 max-sm:flex-col max-sm:gap-4">
            <div className="w-full flex flex-col items-center">
              <div className="w-[50%] max-sm:w-[35%]">
                <Image src={Laki} alt="" />
              </div>
              <div
                className={`text-3xl max-sm:text-xl mt-4 ${purple_purse.className}`}
              >
                Ahmad Almayda S.Kom
              </div>
              <div
                className={`text-xl max-sm:text-sm max-sm:text-center ${mirza.className}`}
              >
                Putra ke-2 dari Bapak Fikri Raihan & Ibu Ayu Lestari
              </div>
            </div>
            <div
              className={`text-8xl max-sm:text-4xl -mt-6 max-sm:-mt-0 ${mirza.className}`}
            >
              &
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="w-[50%] max-sm:w-[35%]">
                <Image src={Perempuan} alt="" />
              </div>
              <div
                className={`text-3xl max-sm:text-xl mt-4 ${purple_purse.className}`}
              >
                Mutiara Deviana O.Y S.Kom
              </div>
              <div
                className={`text-xl max-sm:text-sm max-sm:text-center ${mirza.className}`}
              >
                Putra ke-2 dari Bapak Fikri Raihan & Ibu Ayu Lestari
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="akad">
        <div className="relative flex w-full bg-[#1C0A00] flex-col justify-center items-center h-screen text-white">
          <div className="w-full absolute h-screen overflow-hidden max-sm:hidden">
            <Image src={BgAkad} alt="" />
          </div>
          <div className="w-full absolute h-screen overflow-hidden md:hidden">
            <Image src={Bgakadmobile} alt="" />
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
            <div className="w-[45%] max-sm:w-[80%] ml-10 max-sm:ml-5 pt-10 max-sm:pt-5 pl-14 max-sm:pl-6">
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
        <div className="relative flex gap-4 max-sm:gap-10 w-full bg-[#1C0A00] flex-col justify-center items-center h-screen text-white">
          <div className="w-[30%] absolute top-0 left-0">
            <Image src={Aksenitung} alt="" />
          </div>
          <div className="w-[30%] absolute bottom-0 left-44">
            <Image src={Aksenitung2} alt="" />
          </div>
          <div className={`text-7xl ${passion_conflict.className}`}>
            Hitung Mundur
          </div>
          <div className="w-[20%] max-sm:w-[70%]">
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
          <div className={`text-xl mt-5 ${cardo.className}`}>
            <button className="bg-[#434242] px-12 py-2 rounded-xl hover:bg-[#434242]">
              Tambahkan ke kalendar
            </button>
          </div>
        </div>
      </section>

      <section id="galeri">
        <div className="relative w-full flex bg-[#1C0A00] -z-0 flex-col h-screen justify-center gap-5 items-center text-white">
          <div className="w-[30%] absolute top-0 left-44 -z-10">
            <Image src={AksenGaleri} alt="galeri" />
          </div>
          <div className="w-[20%] absolute bottom-0 left-0 -z-10">
            <Image src={Gbawahkiri} alt="galeri" />
          </div>
          <div className="w-[20%] absolute bottom-0 right-0 -z-10">
            <Image src={Gbawahkanan} alt="galeri" />
          </div>
          <div className={`text-6xl ${passion_conflict.className}`}>
            Our Gallery
          </div>
          <div className="flex justify-center items-center gap-6 max-sm:flex-col">
            <div className="flex flex-col gap-5 justify-center items-end max-sm:items-center">
              <div className="w-[80%]">
                <Image src={Foto1} alt="foto" />
              </div>
              <div className="w-[80%]">
                <Image src={Foto2} alt="foto" />
              </div>
            </div>
            <div className="flex items-center justify-start max-sm:justify-center">
              <div className="w-[80%]">
                <Image src={Foto3} alt="foto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tamuundangan">
        <div className="w-full h-screen flex flex-col justify-center items-center bg-[#1C0A00] -z-0 relative text-white">
          <div className={`text-8xl ${passion_conflict.className}`}>
            <div className="text-end"> Tamu</div>
            <div className="-mt-10">Undangan</div>
          </div>

          <div className="w-full flex flex-col mt-6 items-center justify-center text-black gap-5">
            <textarea
              className="w-[40%] max-sm:w-[85%] h-64 bg-white rounded-xl p-4 text-2xl max-sm:text-xl"
              placeholder="Nama tamu undangan"
            />
            <div className="flex gap-4">
              <button className="px-8 py-2 rounded-lg bg-[#22A39F]">
                HADIR
              </button>
              <button className="px-8 py-2 rounded-lg bg-[#888a8a]">
                TIDAK DAPAT HADIR
              </button>
            </div>
          </div>

          <div className="w-[20%] absolute top-0 right-0">
            <Image src={Tamukanan} alt="" />
          </div>
          <div className="w-[20%] absolute top-0 left-0">
            <Image src={Tamukiri} alt="" />
          </div>
          <div className="w-[30%] absolute bottom-0 left-0">
            <Image src={BawahTamu} alt="" />
          </div>
        </div>
      </section>

      <section id="gift">
        <div className="w-full h-screen flex flex-col justify-center items-center relative z-0 bg-[#1C0A00] text-white">
          <div className="w-[30%] absolute left-0 top-0">
            <Image src={Giftatas} alt="" />
          </div>
          <div className="w-[30%] absolute right-0 bottom-0">
            <Image src={Giftbawah} alt="" />
          </div>

          <div className={`text-7xl ${passion_conflict.className}`}>
            Wedding Gift
          </div>
          <div className="w-70% flex max-sm:flex-col gap-5 items-center justify-center mt-5">
            <div className="w-[30%] max-sm:w-[80%]">
              <Image src={BCA} alt="" />
            </div>
            <div className="w-[30%] max-sm:w-[80%]">
              <Image src={BRI} alt="" />
            </div>
          </div>
          <div className="w-[61%] max-sm:w-[80%] bg-white h-44 mt-8 rounded-xl flex max-sm:flex-col p-4 items-center gap-8">
            <div className="w-[15%]">
              <Image src={Kado} alt="kado" />
            </div>
            <div className={`${cardo.className}`}>
              <div
                className={`text-black text-2xl underline underline-offset-8 max-sm:text-center`}
              >
                Ahmad dan Mutiara
              </div>
              <div className="text-black text-center">Di</div>
              <div className="text-black text-center">
                Jl. Andara Raya, Cinere, Jakarta Selatan DKI <br />
                Jakarta 12450 Jakarta Selatan (IDJK03).
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ucapan">
        <div className="w-full h-screen max-sm:h-full max-sm:py-10 flex flex-col justify-center items-center relative z-0 bg-[#1C0A00] text-white">
          <div className="w-[30%] absolute right-0 top-0">
            <Image src={Aksenucapan} alt="aksen" />
          </div>
          <div className="w-[80%] absolute bottom-0 -z-10">
            <Image src={Aksenucapanbawah} alt="aksen" />
          </div>

          <div
            className={`text-8xl max-sm:text-6xl ${passion_conflict.className}`}
          >
            Ucapan & Doa
          </div>
          <div
            className={`text-end max-sm:text-center text-2xl max-sm:text-base ml-36 max-sm:ml-0 -mt-5 max-sm:mt-0 ${cardo.className}`}
          >
            untuk pasangan yang berbahagia
          </div>
          <div className="w-full flex max-sm:flex-col pl-20 max-sm:pl-6 max-sm:px-6 mt-8 text-black gap-20 max-sm:gap-5">
            <div className="w-[50%] max-sm:w-full flex flex-col gap-5">
              <input
                className="text-md w-full px-8 rounded-2xl py-3"
                placeholder="Nama Pengirim"
              />
              <textarea
                className="text-md px-8 pt-3 rounded-2xl h-72 max-sm:h-56"
                placeholder="kalimat ucapan untuk mempelai pasangan"
              />
              <div className="">
                <button className="px-8 py-2 rounded-3xl bg-amber-800 text-white hover:bg-amber-950">
                  kirim
                </button>
              </div>
            </div>
            <div className="w-[50%] flex flex-col pr-20 max-sm:pr-0 max-sm:w-full">
              <div className="h-auto w-full bg-white/30 p-4 rounded-md backdrop-blur-md flex flex-col items-center justify-center">
                <div className="w-[70%] max-sm:w-full">
                  <Image src={Komentar} alt="komentar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ucapan">
        <div className="w-full h-screen flex flex-col overflow-hidden justify-center items-center relative z-0 bg-[#1C0A00] text-white">
          <div className="absolute top-0 w-[80%] -z-0">
            <Image src={Aksenlovestory} alt="" />
          </div>
          <div className="absolute bottom-0 right-0 w-[30%] max-sm:w-full -z-0">
            <Image src={Aksenbawahstory} alt="" />
          </div>
          <div className={`text-6xl max-sm:mb-8 ${passion_conflict.className}`}>
            Love Story
          </div>
          <div className="flex w-full items-center justify-center max-sm:flex-col">
            <div className="w-[30%] max-sm:w-[60%] z-0 max-sm:-rotate-45 max-sm:-ml-10">
              <Image src={Story1} alt="" />
            </div>
            <div className="w-[40%] -ml-44 max-sm:w-[90%] max-sm:ml-0 max-sm:-mt-20 max-sm:rotate-45">
              <Image src={Story2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ModernCulture;
