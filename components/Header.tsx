import exp from "constants";
import Link from "next/link";

function Header() {
  return (
    <header className="col-span-2 grid grid-cols-1 gap-5">
      <section className="bg-mDarkBlue card w-full p-4 rounded-xl h-full text-mYellow">
        <h1 className="krona-one">Links</h1>
        <ul className="mt-6 flex flex-col gap-1.5">
          <li className="underline">
            <Link href="/">/about</Link>
          </li>
          <li className="underline">
            <Link href="/">/works</Link>
          </li>
          <li className="underline">
            <Link href="/">/uses</Link>
          </li>
          <li className="underline">
            <Link href="/">/thoughts</Link>
          </li>
          <li className="underline">
            <Link href="/">/gallery</Link>
          </li>
        </ul>
      </section>
      <section className="bg-mDarkBlue card w-full p-4 rounded-xl text-center text-mYellow">
        <h1 className="text-base krona-one">Looking for collaboration?</h1>
        <p className="text-xs mt-2">
          Feel free to send me an email, kindly say “Hi” to me and I would reply
          it as soon as possible.
        </p>
        <button className="bg-mOrange text-black krona-one border-2 border-black w-full p-2 rounded-full text-xs mt-5">
          Send Email
        </button>
      </section>
    </header>
  );
}

export default Header;
