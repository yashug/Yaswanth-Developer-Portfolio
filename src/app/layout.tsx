import "./globals.css";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Yaswanth Gosula - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${monserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
