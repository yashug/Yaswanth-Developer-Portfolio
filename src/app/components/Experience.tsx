"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ExperienceDetails from "./ExperienceDetails";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <ExperienceDetails
            position="Frontend Software Architect"
            company="Sitedocs"
            companyLink="https://www.sitedocs.com/"
            time="Nov 2019-Present"
            address="Remote"
            work="Created a powerful web application for monitoring scheduled tasks and their statuses. Users can efficiently manage tasks with customizable filters and seamless navigation. The app also facilitates form scheduling and signature assignment for safety compliance on construction sites, enhancing productivity and workflow management.
"
          />
          <ExperienceDetails
            position="Frontend Software Engineer"
            company="Crossover"
            companyLink="https://www.crossover.com/"
            time="Nov 2019-May 2021"
            address="Remote"
            work="Built a React-based SPA enabling user chat functionality, rewrote Angular pages into React for improved performance, and introduced a storybook design system across multiple web applications, reducing development time"
          />
          <ExperienceDetails
            position="Principal Software Engineer"
            company="Zemoso Technologies"
            companyLink="https://www.zemosolabs.com/"
            time="Jan 2019-Nov 2019"
            address="Hyderabad, IN"
            work="Developed a robust doctor-patient video communication platform, integrating the Moxtra SDK, which facilitated seamless interactions for over 10,000 doctors and patients. Created an Amazon Lex chatbot that efficiently addressed common patient inquiries, leading to a reduction in support calls by 20%"
          />
          <ExperienceDetails
            position="Senior Software Engineer"
            company="Zemoso Technologies"
            companyLink="https://www.zemosolabs.com/"
            time="July 2017-Dec 2018"
            address="Hyderabad, IN"
            work=" Led the development of an interactive user interface for borescope annotation, enhancing usability by providing findings to users. Implemented linter rules to enforce code quality standards, reducing the need for bug fixes. Ensured high-quality code by achieving 100% unit test coverage on all new features and bug fixes."
          />
          <ExperienceDetails
            position="Software Engineer"
            company="Ananth technologies"
            companyLink="https://ananthtech.com/"
            time="Dec 2015-Jun 2017"
            address="Hyderabad, IN"
            work="Successfully implemented a new user interface design for the hotel inventory management system, utilizing an intelligent algorithm to optimize inventory and maximize bookings. Introduced a Grafana analytic dashboard for real-time monitoring of bookings, check-ins, checkouts, and other key performance indicators"
          />
          <ExperienceDetails
            position="Software Engineer"
            company="CoForge"
            companyLink="https://www.coforge.com/"
            time="Aug 2013-Nov 2015"
            address="Hyderabad, IN"
            work="Played a vital role in exploring and understanding the Akana framework API, gaining comprehensive knowledge of backend operations. Collaborated with the team to develop and deliver high-quality software solutions, contributing to the success of various projects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
