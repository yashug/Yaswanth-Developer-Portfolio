import NavBar from "./components/NavBar";
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
        <NavBar />
        <main className="flex items-center w-full min-h-screen text-dark">
          <div className="w-full h-full inline-block z-0 bg-light p-32 pt-0">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
