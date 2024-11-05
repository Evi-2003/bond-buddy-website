"use client";

import { useRef, useEffect } from "react";
import { animate } from "motion";

const CountWidget = ({
  count,
  title,
  duration,
}: {
  count: number;
  title: string;
  duration: number;
}) => {
  const countElement = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!countElement.current) {
      return;
    }

    animate(
      (progress) => {
        if (countElement.current) {
          const value = Math.floor(progress * (count - 1)) + 1;
          countElement.current.innerHTML = value.toLocaleString("nl-NL");
        }
      },
      { duration: duration, easing: "ease-out" },
    );
  }, [count, countElement]);

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg px-3 py-2 w-72">
      <h1 className="text-2xl font-semibold" ref={countElement}>
        {1}
      </h1>
      <h2 className="text-base">{title}</h2>
    </div>
  );
};

export default CountWidget;
