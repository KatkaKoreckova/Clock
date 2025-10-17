// src/components/Digit.tsx
import React from "react";
import Clock from "./Clock";

export type Direction = "n" | "br" | "bl" | "tr" | "tl" | "b" | "s";

interface DigitProps {
  number?: "-1" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
}

export const digits: Record<string, Direction[]> = {
  "0": ["tl", "b", "b", "tr", "s", "tl", "tr", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "bl", "br", "s", "bl", "b", "b", "br"],
  "1": ["tl", "b", "tr", "n", "bl", "tr", "s", "n", "n", "s", "s", "n", "n", "s", "s", "n", "tl", "br", "bl", "tr", "bl", "b", "b", "br"],
  "2": ["tl", "b", "b", "tr", "bl", "b", "tr", "s", "tl", "b", "br", "s", "s", "tl", "b", "br", "s", "bl", "b", "tr", "bl", "b", "b", "br"],
  "3": ["tl", "b", "b", "tr", "bl", "b", "tr", "s", "n", "tl", "br", "s", "n", "bl", "tr", "s", "tl", "b", "br", "s", "bl", "b", "b", "br"],
  "4": ["tl", "tr", "tl", "tr", "s", "s", "s", "s", "s", "bl", "br", "s", "bl", "b", "tr", "s", "n", "n", "s", "s", "n", "n", "bl", "br"],
  "5": ["tl", "b", "b", "tr", "s", "tl", "b", "br", "s", "bl", "b", "tr", "bl", "b", "tr", "s", "tl", "b", "br", "s", "bl", "b", "b", "br"],
  "6": ["tl", "b", "b", "tr", "s", "tl", "b", "br", "s", "bl", "b", "tr", "s", "tl", "tr", "s", "s", "bl", "br", "s", "bl", "b", "b", "br"],
  "7": ["tl", "b", "b", "tr", "bl", "b", "tr", "s", "n", "n", "s", "s", "n", "n", "s", "s", "n", "n", "s", "s", "n", "n", "bl", "br"],
  "8": ["tl", "b", "b", "tr", "s", "tl", "tr", "s", "s", "bl", "br", "s", "s", "tl", "tr", "s", "s", "bl", "br", "s", "bl", "b", "b", "br"],
  "9": ["tl", "b", "b", "tr", "s", "tl", "tr", "s", "s", "bl", "br", "s", "bl", "b", "tr", "s", "tl", "b", "br", "s", "bl", "b", "b", "br"],
  "-1": Array(24).fill("n") as Direction[],
};

const Digit: React.FC<DigitProps> = ({ number = "-1" }) => {
  const num = digits[number] ?? digits["-1"];

  return (
    <div className="grid grid-rows-6 grid-cols-4 gap-0.5 w-max">
      {num.map((d, i) => (
        <Clock key={i} direction={d} />
      ))}
    </div>
  );
};

export default Digit;
