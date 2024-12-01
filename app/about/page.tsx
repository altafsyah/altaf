/* eslint-disable react/no-unescaped-entities */
import BackButton from "@/components/BackToHome";
import Image from "next/image";
import avatar from "@/public/images/altaf.webp";
import Link from "next/link";
import githubImage from "@/public/images/github-mark-white.png";
import Journey from "./Journey";

export default function About() {
  return (
    <>
      <BackButton href="/" title="Home" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="card text-mYellow bg-mDarkBlue relative overflow-hidden rounded-xl p-5 row-span-2 min-h-40 hover:rotate-2">
          <Image
            src="/images/altaf-ril.webp"
            fill
            className="object-cover w-full h-full lg:scale-[2]"
            alt="Altaf Syahrastani"
          />
        </div>
        <div className="card p-5 rounded-xl bg-mYellow hover:-rotate-2">
          <div className="">
            <h1 className="text-sm font-bold krona-one">Yup, that's me</h1>
          </div>
          <p className="mt-1">
            Currently, I work as a Fulltime Frontend Developer at company based
            in Yogyakarta, Indonesia. <br />
            <br />I am{" "}
            <span className="text-mDarkBlue font-bold">@altafsyh_</span> at any
            other platform, just in case you want to connect with me 😁.
          </p>
        </div>
        <div className="card p-5 rounded-xl bg-mDarkBlue hover:-rotate-0 -rotate-2">
          <h1 className="text-mYellow text-center krona-one">Let's connect!</h1>
          <div className="grid grid-cols-4 gap-2 mt-3">
            <Link
              href="https://github.com/altafsyah"
              target="_blank"
              className="flex justify-center items-center rounded-lg bg-mOrange border-2 border-black overflow-hidden group w-full aspect-square p-3"
            >
              <Image
                src={githubImage}
                alt="GitHub"
                width={50}
                height={50}
                className="group-hover:scale-125 transition-transform duration-150"
              />
            </Link>
            <Link
              href="https://github.com/altafsyah"
              target="_blank"
              className="flex justify-center items-center rounded-lg bg-mOrange border-2 border-black overflow-hidden group w-full aspect-square p-3"
            >
              <Image
                src={githubImage}
                alt="GitHub"
                width={50}
                height={50}
                className="group-hover:scale-125 transition-transform duration-150"
              />
            </Link>
            <Link
              href="https://github.com/altafsyah"
              target="_blank"
              className="flex justify-center items-center rounded-lg bg-mOrange border-2 border-black overflow-hidden group w-full aspect-square p-3"
            >
              <Image
                src={githubImage}
                alt="GitHub"
                width={50}
                height={50}
                className="group-hover:scale-125 transition-transform duration-150"
              />
            </Link>
            <Link
              href="https://github.com/altafsyah"
              target="_blank"
              className="flex justify-center items-center rounded-lg bg-mOrange border-2 border-black overflow-hidden group w-full aspect-square p-3"
            >
              <Image
                src={githubImage}
                alt="GitHub"
                width={50}
                height={50}
                className="group-hover:scale-125 transition-transform duration-150"
              />
            </Link>
          </div>
        </div>
        <div className="card p-5 rounded-xl bg-mYellow md:col-span-2 hover:rotate-1">
          <p>
            I believe that language and framework is just a tools to achieve our
            goals. But my current go-to stacks are React and Typescript. I also
            used these stack in the past.
          </p>
          <div className="flex flex-wrap gap-5 h-fit w-full relative overflow-hidden m-auto">
            <div className="w-10 aspect-square relative">
              <Image
                src="/images/typescript.png"
                fill
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-10 aspect-square relative">
              <Image
                src="/images/laravel.png"
                fill
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-10 aspect-square relative">
              <Image
                src="/images/nextjs.png"
                fill
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-10 aspect-square relative">
              <Image
                src="/images/javascript.webp"
                fill
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-10 aspect-square relative">
              <Image
                src="/images/flutter.webp"
                fill
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-10 aspect-square relative">
              <Image
                src="/images/firebase.png"
                fill
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
        <Journey />
      </section>
    </>
  );
}
