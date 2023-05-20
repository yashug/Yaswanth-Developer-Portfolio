import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

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
        className={`${monserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}
        suppressHydrationWarning={true}
      >
        <NavBar />
        <main className="flex items-center w-full min-h-screen text-dark">
          <div className="w-full h-full inline-block z-0 bg-light p-32 pt-0 dark:bg-dark">
            {children}
          </div>
        </main>
        <Footer />
        <Script id="theme-switcher">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`}
        </Script>
      </body>
    </html>
  );
}
