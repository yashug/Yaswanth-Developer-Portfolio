"use client";

import Link from "next/link";
import { LinkArrow } from "./Icons";

const Resume = () => {
  return (
    <Link
      href="/Yaswanth_Resume_2023.pdf"
      target="_blank"
      download={true}
      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent 
  hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
    >
      Resume
      <LinkArrow className="!w-6 ml-1 md:!w-4" />
    </Link>
  );
};

export default Resume;
