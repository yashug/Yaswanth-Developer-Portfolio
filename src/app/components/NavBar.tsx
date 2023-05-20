"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

type CustomMobileLinkProps = CustomLinkProps & {
  toggle: () => void;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block absolute bg-dark -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          path === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  toggle,
  className = "",
}: CustomMobileLinkProps) => {
  const { push } = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    toggle();
    push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block absolute bg-light -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 flex items-center justify-between font-medium dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://github.com/yashug"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yaswanthg5"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/urstrulyyashu5"
            target="_blank"
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg py-32 backdrop-blur-md"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex justify-center items-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/yashug"
              target="_blank"
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yaswanthg5"
              target="_blank"
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/urstrulyyashu5"
              target="_blank"
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark sm:mx-1" />
              ) : (
                <MoonIcon className="fill-dark sm:mx-1" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
