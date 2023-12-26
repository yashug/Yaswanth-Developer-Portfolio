import AnimatedText from "../(components)/AnimatedText";
import FeaturedProject from "../(components)/FeaturedProject";
import Project from "../(components)/Project";
import project1 from "../../../public/images/projects/SM-Project.jpg";
import project2 from "../../../public/images/projects/PF-Project.png";
import project3 from "../../../public/images/projects/SC-Project.jpg";
import project4 from "../../../public/images/projects/DS-Project.jpg";
import project5 from "../../../public/images/projects/WFS-Project.jpg";
import project6 from "../../../public/images/projects/Discuss-Project.jpeg";

export const metadata = {
  title: "Yaswanth Gosula - Projects",
  description:
    "Discover the latest webapp projects created by Yaswanth Gosula, a Next.js developer with  expertise in React.js and frontend development. Browse software engineering articles and tutorials for tips on creating your own portfolio.",
};

const projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <AnimatedText
        text="Creativity Prevails over Knowledge!"
        className="mb-16 mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl !leading-tight !text-8xl sm:mt-8"
      />
      <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <div className="col-span-12">
          <FeaturedProject
            title="Monitor Dashboard"
            img={project1}
            summary="A remarkable web application created for Sitedocs, featuring advanced scheduling capabilities. Experience the power of streamlined form management with seamless scheduling, signature assignment, and real-time monitoring. Explore the website for a firsthand look at its cutting-edge features and intuitive user interface"
            link="https://www.sitedocs.com/scheduled-forms/"
            github="/"
            type="Saas Application"
            isPrivate
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title="Discuss - Reddit Basic Clone"
            img={project6}
            summary="Next.js 14 simple Reddit clone with Server actions, Tailwind, Prisma, Zod, PlanetScale, ShadcnUI and NextAuth."
            link="https://dub.sh/discuss-reddit"
            github="https://github.com/yashug/Discuss"
            type="Saas Application"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title="Next js Portfolio Website"
            img={project2}
            summary="Immerse yourself in a professional modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Experience seamless page transitions, cool animations and a unique design that stands out. Enjoy full responsiveness across devices for a seamless browsing experience."
            link="/"
            github="https://github.com/yashug/Yaswanth-Developer-Portfolio"
            type="Portfolio Website"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Streamlined Component Library"
            img={project4}
            link="https://sitedocssafetycorp.github.io/sitedocs-design-system/?path=/story/design-system-navigationlistitem--with-loader"
            github="/"
            type="Design System"
            isPrivate
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Custom Workflow Automation"
            img={project5}
            link="https://www.sitedocs.com/workflow-studio/"
            github="/"
            type="Workflow Automation"
            isPrivate
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title="Real-time Communication and Collaboration"
            img={project3}
            summary="A revolutionary messaging application created for Sitedocs, that enhances collaboration and productivity with real-time communication and Slack-like features. Explore the website to witness seamless user engagement and the power of interactive messaging."
            link="https://www.sitedocs.com/features/#certification-tracking-1"
            github="/"
            type="Chat Application"
            isPrivate
          />
        </div>
      </div>
    </main>
  );
};

export default projects;
