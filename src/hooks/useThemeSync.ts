import { useEffect } from "react";

import { useUIStore } from "@/src/stores/stores";

export function useThemeSync() {
  const themeMode = useUIStore((s) => s.themeMode);

  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [themeMode]);
}
