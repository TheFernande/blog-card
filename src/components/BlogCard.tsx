"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  category,
  title,
  excerpt,
}) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      autoAnimate(animationRef.current, {
        duration: 150,
        easing: "ease-in-out",
      });
    }
  }, []);

  return (
    <article className="w-[340px] h-[504px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative w-[340px] h-[288px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="340px"
        />
      </div>
      <div ref={animationRef} className="p-6 flex flex-col gap-4">
        <span className="text-green-700 text-sm bg-green-50 px-2 py-1 rounded-full w-fit border border-green-200">
          {category}
        </span>
        <h2 className="text-neutral-900 text-[18px] font-semibold leading-7 line-clamp-1">
          {title}
        </h2>
        <p className="text-neutral-600 text-[16px] font-medium leading-6 line-clamp-2">
          {excerpt}
        </p>
        <Link
          href="/"
          className="text-indigo-700 flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 rounded w-fit"
        >
          Read more
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
