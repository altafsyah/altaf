"use client";

import clsx from "clsx";

interface Props
  extends Pick<React.ComponentPropsWithoutRef<"button">, "className" | "type"> {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, className, type, onClick }: Props) {
  return (
    <button
      className={clsx(
        className,
        "px-5 py-2 rounded-full border-2 border-black cursor-pointer"
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
