// src/components/Clock.tsx
import React from "react";

type Direction = "n" | "br" | "bl" | "tr" | "tl" | "b" | "s";

interface ClockProps {
  direction?: Direction;
}

const rotation: Record<Direction, [number, number]> = {
  n: [135, 135],
  br: [180, 270],
  bl: [0, 270],
  tr: [90, 180],
  tl: [0, 90],
  b: [0, 180],
  s: [90, 270],
};

const Clock: React.FC<ClockProps> = ({ direction = "n" }) => {
  const [deg1, deg2] = rotation[direction];

  return (
    <div className="w-12 h-12 bg-clockLight dark:bg-clockDark relative rounded-full overflow-hidden">
      <div
        className="h-1 w-1/2 absolute top-1/2 left-1/2 bg-handLight origin-left dark:bg-handDark duration-200"
        style={{ rotate: `${deg1}deg` }}
      ></div>
      <div
        className="h-1 w-1/2 absolute top-1/2 left-1/2 bg-handLight origin-left dark:bg-handDark duration-200"
        style={{ rotate: `${deg2}deg` }}
      ></div>
    </div>
  );
};

export default Clock;
