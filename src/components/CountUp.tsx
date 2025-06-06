// src/components/CountUp.tsx
import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // seconds
}

export default function CountUp({ end, duration = 1.5 }: CountUpProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(handle);
        start = end;
      }
      setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(handle);
  }, [end, duration]);
  return <>{count}</>;
}
