import type { Metadata } from "next";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
