import Image from "next/image";
import Link from "next/link";
import arrowLeft from "@/public/ic_arrow_left.svg";

type BackButtonProps = {
  href: string;
  title: string;
};

export default function BackButton(props: BackButtonProps) {
  return (
    <Link href={props.href} className="flex gap-2 items-center font-bold">
      <Image src={arrowLeft} alt="Back Button" />
      Back to {props.title}
    </Link>
  );
}
