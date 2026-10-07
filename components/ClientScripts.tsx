"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    void import("../src/ts/main");
    if (pathname === "/portfolio") void import("../src/ts/gallery");
    if (pathname === "/contact") void import("../src/ts/form");
  }, [pathname]);

  return null;
}
