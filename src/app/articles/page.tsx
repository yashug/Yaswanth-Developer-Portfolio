import AnimatedText from "../components/AnimatedText";
import FeaturedArticle from "../components/FeaturedArticle";
import Article from "../components/Article";
import article1 from "../../../public/images/articles/create loading screen in react js.jpg";

export const metadata = {
  title: "Yaswanth Gosula - Articles",
};

const articles = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <AnimatedText
        text="Words Can Change The World!"
        className="mb-16 mt-16"
      />
      <ul className="grid grid-cols-2 gap-16">
        <FeaturedArticle
          title="Build A Custom Pagination Component In Reactjs From Scratch"
          summary="Learn how to build a custom pagination component in ReactJS from scratch. 
        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          time="9 min read"
          link="/"
          img={article1}
        />
        <FeaturedArticle
          title="Build A Custom Pagination Component In Reactjs From Scratch"
          summary="Learn how to build a custom pagination component in ReactJS from scratch. 
        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          time="9 min read"
          link="/"
          img={article1}
        />
      </ul>
      <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
        All Articles
      </h2>
      <ul className="w-full">
        <Article
          title="Build A Custom Pagination Component In Reactjs From Scratch"
          date="May 20, 2023"
          link="/"
          image={article1}
        />
        <Article
          title="Build A Custom Pagination Component In Reactjs From Scratch"
          date="May 20, 2023"
          link="/"
          image={article1}
        />
        <Article
          title="Build A Custom Pagination Component In Reactjs From Scratch"
          date="May 20, 2023"
          link="/"
          image={article1}
        />
      </ul>
    </main>
  );
};

export default articles;
