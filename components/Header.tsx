"use client";
/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogShown = () => {
    setIsDialogOpen(!isDialogOpen);
    setTimeout(() => {
      setIsDialogOpen(false);
    }, 1500);
  };

  return (
    <>
      <header className="sm:col-span-2 grid grid-cols-1 gap-5 h-fit lg:sticky top-10 order-1 lg:order-last">
        <section className="bg-mDarkBlue card w-full p-4 rounded-xl text-mYellow h-fit">
          <h1 className="krona-one">Links</h1>
          <ul className="mt-6 flex lg:flex-col flex-wrap gap-1.5">
            <li className="underline">
              <Link href="/about">/about </Link>
            </li>
            <li className="underline">
              <Link href="/works">/works </Link>
            </li>
            <li className="">
              <button onClick={handleDialogShown}>/uses </button>
            </li>
            <li className="">
              <button onClick={handleDialogShown}>/thoughts </button>
            </li>
            <li className="">
              <button onClick={handleDialogShown}>/gallery </button>
            </li>
          </ul>
        </section>
        <section className="bg-mDarkBlue card w-full p-4 rounded-xl text-center text-mYellow h-fit">
          <h1 className="text-base krona-one">Looking for collaboration?</h1>
          <a
            href="mailto:syahrastanialtaf@gmail.com"
            className="block bg-mOrange text-black krona-one border-2 border-black w-full p-2 rounded-full text-xs mt-5"
          >
            Send Email
          </a>
        </section>
      </header>
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{
              bottom: -100,
            }}
            animate={{
              bottom: 16 * 4,
            }}
            exit={{
              bottom: -100,
            }}
            className="text-center rounded-xl card max-w-[300px] fixed bottom-16 left-1/2 -translate-x-1/2 w-full p-5 bg-white"
          >
            <h1 className="krona-one">It's not ready yet, sorry.</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
