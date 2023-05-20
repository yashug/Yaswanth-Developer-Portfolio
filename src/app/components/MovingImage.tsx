"use client";
import { motion, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, MouseEvent } from "react";

type MovingImageProps = {
  title: string;
  img: StaticImageData;
  link: string;
};

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }: MovingImageProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLAnchorElement>(null);

  function handleMouse(e: MouseEvent<HTMLAnchorElement>) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(e.pageX);
      y.set(-10);
    }
  }

  function handleMouseLeave() {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

export default MovingImage;
