"use client";

import Image from "next/image";
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
  return (
    <article className="w-[340px] h-fit bg-white rounded-lg overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.1)]">
      <div className="relative w-full h-[288px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="px-4 py-6 space-y-3 w-full h-fit">
        <div className="flex flex-col gap-2 w-full h-fit">
          <span className="text-green-700 text-sm bg-green-50 border border-green-200 px-2 py-0.5 rounded-full w-fit flex items-center justify-center">
            {category}
          </span>
          <h2 className="text-neutral-900 text-lg font-semibold line-clamp-1">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-6 w-full h-fit">
          <p className="text-neutral-600 text-base line-clamp-2">{excerpt}</p>
          <button className="flex items-center gap-[6px] text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 rounded">
            <span className="size-fit text-base font-medium">Read more</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
