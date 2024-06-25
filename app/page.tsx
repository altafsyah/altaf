/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-5">
      <section className="sm:col-span-2 lg:col-span-4 bg-mYellow rounded-xl w-full p-5 lg:p-8 card">
        <header className="flex gap-5 items-center">
          <div className="w-16 aspect-square rounded-full bg-mOrange relative overflow-hidden">
            <Image
              src="/altaf.webp"
              alt="Altaf Syahrastani"
              fill
              className="object-[center_10px]"
            />
          </div>
          <div className="">
            <h1 className="text-lg sm:text-xl font-bold krona-one">
              Altaf Syahrastani
            </h1>
            <h2 className="text-base text-mDarkBlue">Frontend Developer</h2>
          </div>
        </header>
        <p className="mt-3">
          Altaf is a cool developer who loves creating great websites with React
          and JavaScript. When he's not coding, this fun guy enjoys playing
          <span className="font-bold"> Minecraft</span>.
        </p>
      </section>
      <section className="hover:bg-mYellow/50 transition-colors min-h-[250px] duration-75 cursor-pointer group lg:col-span-2 bg-mYellow rounded-xl w-full p-5 flex justify-center items-center text-7xl card krona-one-regular">
        <h1 className="group-hover:scale-150 transition-transform duration-300">
          ?
        </h1>
      </section>
      <section className="cursor-pointer hover:bg-mDarkBlue/90 min-h-[250px] transition-all duration-75 group lg:col-span-2 bg-mDarkBlue rounded-xl w-full p-5 text-base card relative overflow-hidden">
        <h1 className="krona-one text-mYellow">Selected Works</h1>
        <div className="group-hover:-left-5 group-hover:-bottom-2 group-hover:scale-105 transition-all duration-300 w-full h-32 bg-mYellow absolute -left-10 -bottom-5 rounded-xl skew-y-6 border-2 border-black overflow-hidden">
          <Image src="/website_1.webp" alt="Website 1" fill />
        </div>
        <button className="absolute bottom-5 right-5 rounded-full px-4 py-2 bg-mOrange krona-one text-xs border-2 border-black">
          OFALINK
        </button>
      </section>
      <section className="sm:col-span-2 lg:col-span-4 bg-mYellow rounded-xl w-full p-5 card hover:bg-mYellow/50 transition-colors duration-75">
        <h1 className="krona-one">Alasan Membuat Website Pribadi</h1>
        <p>
          An explanation of what is this website about, and why would I put on
          work for this website (Bahasa).
        </p>
        <div className="flex justify-between items-end mt-16">
          <p>July 7, 2024</p>
          <Link
            href="/thoughts/what-and-why"
            className="py-2 px-4 rounded-full bg-mOrange krona-one text-xs border-2 border-black"
          >
            Read More
          </Link>
        </div>
      </section>
    </section>
  );
}
