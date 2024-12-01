import icLink from "@/public/ic_link.svg";
import Image from "next/image";
import Link from "next/link";
import githubImage from "@/public/images/github-mark-white.png";

type WorkItemProps = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  isOnline: boolean;
  url: string;
};

export default function WorkItem(props: WorkItemProps) {
  return (
    <li className="rounded-lg overflow-hidden">
      <div className="relative w-full h-[180px] bg-mDarkBlue group">
        <Image
          src={props.image!}
          alt="GitHub"
          fill
          className="group-hover:scale-105 transition-transform duration-300 object-"
        />
      </div>
      <div className="mt-3">
        <h2 className="krona-one text-sm">
          {props.title}
          <span className="float-right">
            <Link href={props.url} target="_blank">
              <Image src={icLink} alt="Icon" />
            </Link>
          </span>
        </h2>
        <p className="mt-2">{props.description}</p>
      </div>
    </li>
  );
}
