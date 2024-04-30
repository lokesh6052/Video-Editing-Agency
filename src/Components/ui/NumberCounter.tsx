'use client';

import React, { useEffect, useState } from "react";
import styles from "../../app/modules/NumberCounter.module.css"; 

interface NumberCounterProps {
  end: number; // The target number to count up to
  duration?: number; // Duration of the animation in milliseconds
  isVisible?: boolean; // Indicates if the counter is visible on the screen
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  end,
  duration = 2000,
  isVisible = true,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) return; // Do nothing if the counter is not visible

    let start = 0;
    const increment = Math.ceil(end / (duration / 100)); // Calculate increment based on duration

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, 100); // Update every 100ms

    return () => clearInterval(timer); // Cleanup on unmount
  }, [end, duration, isVisible]);

  return <span className={styles.numberCounter}>{count}</span>;
};

export default NumberCounter;
