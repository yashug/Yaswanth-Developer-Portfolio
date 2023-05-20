import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg px-32 dark:text-light dark:border-light sm:text-base">
      <div className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>
          by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Yaswanth Gosula
          </Link>
        </div>
        <Link
          href="https://calendly.com/yaswanth5/30min"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
