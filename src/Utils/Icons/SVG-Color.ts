"use client";

import { useEffect, useState } from "react";

export default function useSvgColor() {
  const [color, setColor] = useState("#3E445A");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setColor(media.matches ? "#FFFFFF" : "#3E445A");

    const listener = (e: MediaQueryListEvent) =>
      setColor(e.matches ? "#FFFFFF" : "#3E445A");

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return color;
}