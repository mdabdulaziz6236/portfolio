"use client";

import type { MouseEvent, ReactNode } from "react";

import clsx from "clsx";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
}

/** Wraps content with a cursor-following radial glow. */
export function Spotlight({ children, className }: SpotlightProps) {
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--spot-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--spot-y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <div className={clsx("spotlight", className)} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}
