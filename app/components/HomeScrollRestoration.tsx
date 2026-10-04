"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function HomeScrollRestoration() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const homeScrollY = useRef(0);
  const restoreOnPopState = useRef(false);

  useEffect(() => {
    const saveHomeScroll = () => {
      if (
        window.location.pathname === "/" &&
        !restoreOnPopState.current
      ) {
        homeScrollY.current = window.scrollY;
      }
    };

    const rememberLeavingPosition = (event: MouseEvent) => {
      if (
        window.location.pathname !== "/" ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.hasAttribute("download") || link.target === "_blank") {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin === window.location.origin &&
        destination.pathname !== "/"
      ) {
        homeScrollY.current = window.scrollY;
      }
    };

    const handlePopState = () => {
      restoreOnPopState.current = window.location.pathname === "/";
    };

    window.addEventListener("scroll", saveHomeScroll, { passive: true });
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", rememberLeavingPosition, true);

    return () => {
      window.removeEventListener("scroll", saveHomeScroll);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", rememberLeavingPosition, true);
    };
  }, []);

  useLayoutEffect(() => {
    const previous = previousPathname.current;
    previousPathname.current = pathname;

    if (pathname !== "/") return;

    if (!restoreOnPopState.current) {
      if (previous !== "/") homeScrollY.current = 0;
      return;
    }

    const savedScrollY = homeScrollY.current;
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollY, behavior: "instant" });
      restoreOnPopState.current = false;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
