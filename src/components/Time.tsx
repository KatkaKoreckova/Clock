// src/components/Clock.tsx
import React, { useEffect, useState } from "react";
import Digit from "./Digit";

const Clock: React.FC = () => {
  const getTimeDigits = () =>
    new Date()
      .toLocaleTimeString("sk-SK", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(/\D/g, "")
      .split("");

  const [digits, setDigits] = useState<string[]>(getTimeDigits());

  // Optional: update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDigits(getTimeDigits());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="digits" className="flex flex-row space-x-6">
      <div className="flex flex-row space-x-2">
        <Digit number={digits[0] as any} />
        <Digit number={digits[1] as any} />
      </div>
      <div className="flex flex-row space-x-2">
        <Digit number={digits[2] as any} />
        <Digit number={digits[3] as any} />
      </div>
      <div className="flex flex-row space-x-2">
        <Digit number={digits[4] as any} />
        <Digit number={digits[5] as any} />
      </div>
    </div>
  );
};

export default Clock;
