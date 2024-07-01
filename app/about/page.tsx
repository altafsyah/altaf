/* eslint-disable react/no-unescaped-entities */
import BackButton from "@/components/BackToHome";
import Image from "next/image";
import avatar from "@/public/images/altaf.webp";
import Link from "next/link";
import githubImage from "@/public/images/github-mark-white.png";

export default function About() {
  return (
    <>
      <BackButton href="/" title="Home" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="card p-5 rounded-xl bg-mYellow md:col-span-2">
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
          <p className="mt-3">
            Altaf is a cool developer who loves creating great websites with
            React and JavaScript. When he's not coding, this fun guy enjoys
            playing
            <span className="font-bold"> Minecraft</span>.
          </p>
        </div>
        <div className="card text-mYellow bg-mDarkBlue rounded-xl p-5">
          <h1 className="krona-one text-mYellow text-2xl ">About Me</h1>
          <p className="mt-3">
            This page is currently under construction. So there is not much to
            see here. But you can check out my works on the Works page.
          </p>
        </div>
        <Link
          href="https://github.com/altafsyah"
          target="_blank"
          className="flex justify-center items-center card p-5 rounded-xl bg-mDarkBlue group min-h-[200px]"
        >
          <Image
            src={githubImage}
            alt="GitHub"
            width={50}
            height={50}
            className="group-hover:scale-125 transition-transform duration-150"
          />
        </Link>
      </section>
    </>
  );
}
