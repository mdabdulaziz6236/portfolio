"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const isLight = resolvedTheme === "light";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div aria-hidden className="size-9" />;

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={clsx(
        "inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-accent/10 hover:text-foreground",
        className,
      )}
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <SunFilledIcon size={19} /> : <MoonFilledIcon size={19} />}
    </button>
  );
};
