import BlogCard from "../components/BlogCard";

const cardData = {
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
        imageUrl={cardData.imageUrl}
        category={cardData.category}
        title={cardData.title}
        excerpt={cardData.excerpt}
      />
    </main>
  );
}
