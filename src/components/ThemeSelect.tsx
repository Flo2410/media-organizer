"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export const ThemeSelect = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("system");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};
