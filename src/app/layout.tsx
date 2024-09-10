import "./globals.css";
import StoreProvider from "./ui/storeProvider";
import type { Metadata } from "next";

import { robotoSlab } from "@/app/lib/fonts";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Quiz game v2",
  description: "quiz-game-v2 ported from Vue SPA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${robotoSlab.className} h-screen w-screen overflow-hidden bg-[url("/images/background.png")] bg-cover antialiased`}
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
