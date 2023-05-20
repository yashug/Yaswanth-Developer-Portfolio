import AnimatedText from "../components/AnimatedText";
import profilePic from "../../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import AnimatedNumber from "../components/AnimatedNumber";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";

export const metadata = {
  title: "Yaswanth Gosula - About",
};

const about = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center pt-16 dark:text-light">
      <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
      <div className="grid w-full grid-cols-8 gap-16">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Biography
          </h2>
          <p className="font-medium">
            Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
            passion for creating beautiful, functional, and user-centered
            digital experiences. With 4 years of experience in the field. I am
            always looking for new and innovative ways to bring my clients&apos;
            visions to life.
          </p>
          <p className="my-4 font-medium">
            I believe that design is about more than just making things look
            pretty – it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
          <p className="font-medium">
            Whether I&apos;m working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
          <Image
            src={profilePic}
            alt="Yaswanth Gosula"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="col-span-2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-bloc text-7xl font-bold">
              <AnimatedNumber value={50} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
              satsfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-bloc text-7xl font-bold">
              <AnimatedNumber value={40} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
              projects completed
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-bloc text-7xl font-bold">
              <AnimatedNumber value={10} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
              years of experience
            </h2>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />
    </main>
  );
};

export default about;