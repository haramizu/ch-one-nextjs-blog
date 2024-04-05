import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Fotter";
import { ThemeProvider } from "next-themes";

import "highlight.js/styles/github-dark.min.css"; // highlight github dark

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Content Hub ONE",
    default: "powered by Content Hub ONE",
  },
  description: "Powered by Sitecore Content Hub ONE",
  icons: {
    icon: "https://sitecorecontenthub.stylelabs.cloud/api/public/content/ad13eb9aaebc4d24a3921fff59051fb7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
