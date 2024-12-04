import BlogCard from "../components/BlogCard";

const blogData = {
  imageUrl: "/images/interior-image.jpg",
  category: "Interior",
  title: "Top 5 Living Room Inspirations",
  excerpt:
    "Curated vibrants colors for your living, make it pop & calm in the same time.",
};

export default function Home() {
  return (
    <main className="min-h-screen pt-[120px] flex justify-center bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB]">
      <BlogCard
        imageUrl={blogData.imageUrl}
        category={blogData.category}
        title={blogData.title}
        excerpt={blogData.excerpt}
      />
    </main>
  );
}
