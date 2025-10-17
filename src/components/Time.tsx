import React, { useEffect, useState } from "react";
import Digit from "./Digit";

const Clock: React.FC = () => {
  const getTimeDigits = () => {
    const now = new Date();

    // Format to Slovak time zone explicitly
    const timeStr = new Intl.DateTimeFormat("sk-SK", {
      timeZone: "Europe/Bratislava", // 👈 fixed timezone
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(now);

    return timeStr.replace(/\D/g, "").split("");
  };

  const [digits, setDigits] = useState<string[]>([]);

  useEffect(() => {
    // Run only in browser
    setDigits(getTimeDigits());

    const interval = setInterval(() => {
      setDigits(getTimeDigits());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Avoid SSR mismatch
  if (digits.length === 0) return null;

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
