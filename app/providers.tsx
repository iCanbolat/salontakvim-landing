"use client";

import { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function AnchorScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.(
        "a[href^='#']",
      ) as HTMLAnchorElement | null;

      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const section = document.querySelector(hash);
      if (!section || !(section instanceof HTMLElement)) return;

      event.preventDefault();
      lenis?.scrollTo(section, {
        offset: -96,
        duration: 1.1,
        immediate: false,
      });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <AnchorScrollHandler />
      {children}
    </ReactLenis>
  );
}
