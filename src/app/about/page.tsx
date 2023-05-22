import AnimatedText from "../(components)/AnimatedText";
import profilePic from "../../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import AnimatedNumber from "../(components)/AnimatedNumber";
import Skills from "../(components)/Skills";
import Experience from "../(components)/Experience";
import Education from "../(components)/Education";

export const metadata = {
  title: "Yaswanth Gosula - About",
  description:
    "Learn more about Yaswanth Gosula, a Next.js developer with a passion for creating innovative solutions. Discover tips for building a developer portfolio and insights on front-end development.",
};

const about = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center pt-16 dark:text-light sm:pt-8">
      <AnimatedText
        text="Passion Drives Purpose!"
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Biography
          </h2>
          <p className="font-medium">
            Hi, I&apos;m <strong>Yaswanth Gosula</strong>, an experienced
            frontend web developer with a strong passion for creating
            exceptional digital experiences. With 10 years of expertise, I
            specialize in delivering high-quality and user-friendly websites. My
            focus goes beyond writing clean code – I strive to optimize user
            experiences and ensure seamless navigation.
          </p>
          <p className="my-4 font-medium">
            From building responsive websites to developing interactive web
            applications, I bring a commitment to excellence to every project. I
            aim to create intuitive and engaging user interfaces that captivate
            audiences. Together, we can transform your ideas into remarkable
            digital experiences that leave a lasting impression
          </p>
          <p className="font-medium">
            Let&apos;s collaborate and leverage my skills and experience in
            frontend development to bring your vision to life. Get in touch and
            let&apos;s embark on an exciting journey of innovation and
            creativity.
          </p>
        </div>
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
          <Image
            src={profilePic}
            alt="Yaswanth Gosula"
            className="w-full h-auto rounded-2xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-bloc text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumber value={10} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
              satsfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-bloc text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumber value={20} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
              projects completed
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-bloc text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumber value={10} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
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
