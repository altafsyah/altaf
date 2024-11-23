/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import avatar from "@/public/images/altaf.webp";
import selectedWork from "@/public/images/website_1.webp";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full grid grid-cols-2 lg:grid-cols-6 gap-5">
      <section className="col-span-2 lg:col-span-4 bg-mYellow rounded-xl w-full p-5 lg:p-8 card">
        <header className="flex gap-5 items-center">
          <div className="w-16 aspect-square rounded-full bg-mOrange relative overflow-hidden">
            <Image
              src={avatar}
              placeholder="blur"
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
        <p className="mt-3 text-lg">
          Altaf is a cool developer who loves creating great websites with React
          and JavaScript. When he's not coding, this fun guy enjoys playing
          <span className="font-bold"> Minecraft</span>.
        </p>
      </section>
      <section className="hover:bg-mYellow/50 transition-colors min-h-[150px] lg:min-h-[250px] duration-75 cursor-pointer group lg:col-span-2 bg-mYellow rounded-xl w-full p-5 flex justify-center items-center text-7xl card krona-one-regular">
        <h1 className="group-hover:scale-150 transition-transform duration-300">
          ?
        </h1>
      </section>
      <section className="cursor-pointer hover:bg-mDarkBlue/90 min-h-[150px] lg:min-h-[250px] transition-all duration-75 group lg:col-span-2 bg-mDarkBlue rounded-xl w-full p-5 text-base card relative overflow-hidden"></section>
      <section className="col-span-2 lg:col-span-4 bg-mYellow rounded-xl w-full p-5 card"></section>
    </section>
  );
}
