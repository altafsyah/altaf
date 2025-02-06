"use client";

export default function Statistic() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center gap-2">
      <h1 className="text-sm font-medium">
        Project
        <br />
        Shipped
      </h1>
      <div className="h-[100px] w-full bg-red-200"></div>
      <h2 className="text-xl font-medium krona-one-regular">12</h2>
    </div>
  );
}
