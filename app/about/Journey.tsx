"use client";
import clsx from "clsx";
import { useState } from "react";
import journeyList, { IJourneyData, type IJourney } from "./data";
import Image from "next/image";

export default function Journey() {
  const [active, setActive] = useState<number>(2022);
  console.log(journeyList);
  const journey: IJourney = journeyList.filter(
    (item: IJourney) => item.id === active
  )[0];

  const handleActive = (value: number) => setActive(value);

  return (
    <section className="col-span-2 grid grid-cols-3 gap-5 relative">
      <div className="flex flex-col bg-mDarkBlue rounded-xl p-5 card gap-3 text-white h-fit sticky top-10">
        <button
          className={clsx(
            "rounded-md flex justify-center items-center py-2 px-3",
            active === 2022 ? "bg-mOrange text-black font-bold" : ""
          )}
          onClick={() => handleActive(2022)}
        >
          2022
        </button>
        <button
          className={clsx(
            "rounded-md flex justify-center items-center py-2 px-3",
            active === 2023 ? "bg-mOrange text-black font-bold" : ""
          )}
          onClick={() => handleActive(2023)}
        >
          2023
        </button>
        <button
          className={clsx(
            "rounded-md flex justify-center items-center py-2 px-3",
            active === 2024 ? "bg-mOrange text-black font-bold" : ""
          )}
          onClick={() => handleActive(2024)}
        >
          Now
        </button>
      </div>
      <div className="card p-5 rounded-xl col-span-2 bg-mYellow text-black">
        <h1 className="font-semibold text-2xl">{journey.title}</h1>
        <p>{journey.content}</p>
        {journey.data.map((item) => (
          <JourneyItem journey={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}

const JourneyItem = ({ journey }: { journey: IJourneyData }) => {
  return (
    <div className="mt-2">
      <h2 className="font-semibold">{journey.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: journey.content }}
        className="text-sm flex flex-col gap-2 mt-2"
      />
      <div className="relative w-full h-[200px] bg-mOrange mt-5 rounded-lg overflow-hidden flex flex-col justify-center items-center">
        {/* <Image
          src={journey.image}
          alt={journey.title}
          fill
          className="w-full h-full object-cover"
        /> */}
        <h1 className="font-semibold">IMAGE SOON!</h1>
      </div>
    </div>
  );
};
