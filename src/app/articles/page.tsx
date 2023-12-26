import AnimatedText from "../(components)/AnimatedText";
import FeaturedArticle from "../(components)/FeaturedArticle";
import Article from "../(components)/Article";
import article1 from "../../../public/images/articles/article_list.png";
import article2 from "../../../public/images/articles/article_portfolio.png";
import article3 from "../../../public/images/articles/article_redirect.png";
import article4 from "../../../public/images/articles/article_state.png";
import article5 from "../../../public/images/articles/article_typescript.jpg";

export const metadata = {
  title: "Yaswanth Gosula - Articles",
  description:
    "Browse through Yaswanth Gosula's collection of software engineering articles and tutorials on Next.js, React.js, web development, and more.  Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio.",
};

const articles = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <AnimatedText
        text="Crafting a Transformed World through Words!"
        className="mb-16 mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl sm:mt-8"
      />
      <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
        <FeaturedArticle
          title="Boost React List Performance"
          summary="Discover how to optimize the performance of your React lists by leveraging React.memo, useCallback, and proven optimization techniques, enhancing your application's speed and responsiveness"
          time="12 min read"
          link="https://blog.yg-dev.com/boost-react-list-performance-unleashing-efficiency-with-reactmemo-usecallback-and-proven-optimization-techniques"
          img={article1}
        />
        <FeaturedArticle
          title="Crafting an Engaging Portfolio"
          summary="Learn how Next.js, Tailwind CSS, and Framer Motion synergize to create an engaging portfolio website that captivates visitors and highlights your skills effectively"
          time="3 min read"
          link="/"
          img={article2}
        />
      </ul>
      <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
        All Articles
      </h2>
      <ul className="w-full">
        <Article
          title="Thriving in Tech Through Open Source Adventures: A Guide for All"
          date="Sep 22, 2023"
          link="https://blog.yg-dev.com/thriving-in-tech-through-open-source-adventures-a-guide-for-all"
          image={article4}
        />
        <Article
          title="Mastering Conditional TypeScript Properties: A Trick That Will Make You Smile!"
          date="Jul 8, 2023"
          link="https://blog.yg-dev.com/mastering-conditional-typescript-properties-a-trick-that-will-make-you-smile"
          image={article5}
        />
        <Article
          title="Unleashing React's Hidden Power: Conquering the State Persistence Bug!"
          date="Jun 30, 2023"
          link="https://blog.yg-dev.com/unleashing-reacts-hidden-power-conquering-the-state-persistence-bug"
          image={article4}
        />
        <Article
          title="Unveiling JavaScript's Sneaky Redirect Vulnerability"
          date="Jun 16, 2023"
          link="https://blog.yg-dev.com/unveiling-javascripts-sneaky-redirect-vulnerability-can-you-spot-the-threat"
          image={article3}
        />
      </ul>
    </main>
  );
};

export default articles;
