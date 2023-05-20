import AnimatedText from "../components/AnimatedText";
import FeaturedProject from "../components/FeaturedProject";
import Project from "../components/Project";
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";

export const metadata = {
  title: "Yaswanth Gosula - Projects",
};

const projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <AnimatedText
        text="Imagination Trumps Knowledge!"
        className="mb-16 mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <div className="col-span-12">
          <FeaturedProject
            title="Crypto Screener Application"
            img={project1}
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
            link="/"
            github="/"
            type="Featured Project"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Crypto Screener Application"
            img={project1}
            link="/"
            github="/"
            type="Featured Project"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Crypto Screener Application"
            img={project1}
            link="/"
            github="/"
            type="Featured Project"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title="Crypto Screener Application"
            img={project1}
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
            link="/"
            github="/"
            type="Featured Project"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Crypto Screener Application"
            img={project1}
            link="/"
            github="/"
            type="Featured Project"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Crypto Screener Application"
            img={project1}
            link="/"
            github="/"
            type="Featured Project"
          />
        </div>
      </div>
    </main>
  );
};

export default projects;
