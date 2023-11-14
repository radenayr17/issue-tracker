import "@radix-ui/themes/styles.css";
import "@/app/theme.config.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Theme } from "@radix-ui/themes";

import "./globals.css";

import NavBar from "./NavBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker by radenayr",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Theme appearance="light" accentColor="cyan" grayColor="sand" panelBackground="solid" radius="none">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
