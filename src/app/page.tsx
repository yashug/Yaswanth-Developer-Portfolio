import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "./(components)/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./(components)/Icons";
import HireMe from "./(components)/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export const metadata = {
  title: "Yaswanth Gosula - Home",
  description:
    "Explore Yaswanth Gosula's Next.js developer portfolio and discover the latest webapp projects and software engineering articles. Showcase your skills as a frontend developer and software engineer.",
};

export default function Home() {
  return (
    <>
      <div className="flex items-center text-dark justify-between w-full pt-0 md:pt-16 sm:pt-8 lg:flex-col dark:text-light">
        <div className="w-1/2 md:w-full">
          <Image
            src={profilePic}
            alt="YaswanthGosula"
            className="w-full h-auto lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
          <AnimatedText
            text="Transforming Ideas with Code Craftsmanship."
            className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            Experienced front-end developer specializing in cutting-edge web
            applications. Explore my portfolio and articles showcasing expertise
            in React.js and web development. Stay updated on the latest trends.
          </p>
          <div className="flex items-center self-start mt-2 lg:self-center">
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
            <Link
              href="mailto:gosulayaswanth2@gmail.com"
              target="_blank"
              className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image src={lightBulb} alt="YaswanthGosula" className="w-full h-auto" />
      </div>
    </>
  );
}
