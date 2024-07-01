import WorkItem from "./work-item";
import { data } from "./data";
import Link from "next/link";
import BackButton from "@/components/BackToHome";

/* eslint-disable react/no-unescaped-entities */
export default function Works() {
  return (
    <>
      <BackButton href="/" title="Home" />
      <section className="bg-mYellow card p-5 rounded-2xl w-full mt-5">
        <h1 className="text-2xl krona-one mt-5">Works</h1>
        <p className="text-lg">All works I've done</p>
        <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map((item) => (
            <WorkItem
              key={item.slug}
              slug={item.slug}
              title={item.title}
              description={item.description}
              url={item.url}
              isOnline={item.isOnline}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
