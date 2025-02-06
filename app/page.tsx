/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import avatar from "@/public/images/altaf.webp";
import Corner from "@/components/Corner";
import ThemeToggle from "@/components/ThemeToggle";
import Pendulum from "@/components/Pendulum";

export default function Home() {
  return (
    <section className="flex flex-col gap-5 lg:gap-8 relative">
      <header className="">
        <section className="mt-6 flex flex-col md:flex-row gap-5">
          <div
            id="profile-picture"
            className="w-full md:w-[350px] h-[300px] md:h-[200px] card relative bg-white"
          >
            <Image
              src={avatar}
              alt="Altaf Image"
              className="object-contain w-full h-full object-bottom"
            />
          </div>
          <div className="w-full self-center">
            <h1 className="text-4xl font-bold">Hi! Call me Altaf</h1>
            <p className="text-xl">Frontend Engineer</p>
            <ThemeToggle />
          </div>
        </section>
      </header>
      {/* Short About / Key POI */}
      <section className="card min-h-64 bg-purple-500 p-5 text-white grid-background flex flex-col lg:flex-row items-center gap-5 relative group mt-8 lg:mt-0">
        <Corner />
        <div className="relative flex flex-wrap gap-x-5 gap-y-8 h-fit justify-center text-center">
          <div className="card bg-yellow-500 h-fit px-5 py-2 text-sm md:text-xl font-bold text-black -rotate-2 w-fit group-hover:rotate-2">
            PIXEL PERFECT
          </div>
          <div className="card bg-yellow-500 h-fit px-5 py-2 text-sm md:text-xl font-bold text-black rotate-3 w-fit group-hover:-rotate-3">
            OPTIMIZE
          </div>
        </div>
        <div className="card bg-white p-5 text-black font-semibold text-lg flex">
          I'm a frontend engineer who pay attention on detail. I do love to
          create a website that aestethic by its looks while keeping its
          performance to run smooth on any devices
        </div>
        <div className="relative flex flex-wrap gap-x-5 gap-y-8 h-fit justify-center text-center">
          <div className="card bg-yellow-500 h-fit px-5 py-2 text-sm md:text-xl font-bold text-black rotate-3 w-fit group-hover:-rotate-2">
            ACCESSIBILITY
          </div>
          <div className="card bg-yellow-500 h-fit px-5 py-2 text-sm md:text-xl font-bold text-black -rotate-2 w-fit group-hover:rotate-2">
            GREAT UX
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="mt-6 bg-black flex font-mono w-full h-[250px] rounded-xl border-2 border-purple-900 relative overflow-hidden">
        <div className="w-full h-full text-center flex justify-center items-center flex-col p-5 text-yellow-500 relative z-20">
          <h2 className="text-xl font-bold">Sorry, but..</h2>
          <p className="max-w-[250px] text-sm mt-3">
            For several reason, this section is not ready for public yet.
            <br />
            Will be updated soon!
          </p>
        </div>
      </section>
      {/* About */}
      <section className="mt-5">
        <div className="card w-fit bg-blue-500 px-5 py-2 text-2xl text-white font-bold">
          <h2>More...</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-6">
          {/* <div className="card lg:aspect-square p-5 bg-green-900 flex lg:grid grid-cols-2 gap-5">
            <div className="w-10 h-10 bg-white border border-black"></div>
            <div className="w-10 h-10 bg-white border border-black"></div>
            <div className="w-10 h-10 bg-white border border-black"></div>
            <div className="w-10 h-10 bg-white border border-black"></div>
          </div> */}
          <div className="w-full border-2 border-black p-5 bg-purple-900 font-mono lg:col-span-2">
            <h3 className="text-xl text-yellow-300 font-medium">now</h3>
            <ul className="text-sm mt-2 list-disc list-inside text-white">
              <li>Fulltime Frontend Developer</li>
              <li>Learn Backend Technology</li>
              <li>Trying to get healthier</li>
            </ul>
          </div>
          {/* <div className="w-full h-full bg-green-300 p-5 card md:col-span-2"></div> */}
        </div>
      </section>
      <section className="mt-6">
        <Pendulum />
      </section>
    </section>
  );
}
