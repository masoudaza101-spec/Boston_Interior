import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/css/tailwind.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "lenis/dist/lenis.css";
import "glightbox/dist/css/glightbox.css";
import Skeleton from "@/components/Skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

const revealScript = `document.documentElement.classList.add("js");setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove("js")},3000);`;

export const metadata: Metadata = {
  metadataBase: new URL("https://bostoninterior.com"),
  title: {
    template: "%s · Boston Interior",
    default: "Boston Interior · Interior Design, Decoration & Furniture"
  },
  description:
    "Boston Interior creates warm, refined interiors for homes and businesses, residential and commercial design, space planning, decoration and custom furniture.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Boston Interior · Interior Design, Decoration & Furniture",
    description:
      "We design refined interiors that blend comfort and style. Book a consultation with Boston Interior.",
    type: "website",
    images: ["/images/hero-1.webp"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <Skeleton />
        <Header />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}
