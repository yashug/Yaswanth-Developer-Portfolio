"use client";
import { StaticImageData } from "next/image";
import MovingImage from "./MovingImage";
import { motion } from "framer-motion";

type ArticleProps = {
  image: StaticImageData;
  title: string;
  date: string;
  link: string;
};

const Article = ({ image, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.25, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImage title={title} img={image} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

export default Article;
