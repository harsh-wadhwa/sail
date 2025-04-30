import ClothingCard from "@/components/ClothingCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import React from "react";
import { ClothingArticle } from "./types/Clothing";

const Home: React.FC = () => {
  const featuredArticles: ClothingArticle[] = [
    // Sample data for featured articles
    {
      id: 1,
      name: "Summer Dress",
      image: "/images/summer-dress.jpg",
      description: "A beautiful summer dress perfect for any occasion.",
      price: 29.99,
      currency: "INR",
      available: true,
    },
    {
      id: 2,
      name: "Casual Shirt",
      image: "/images/casual-shirt.jpg",
      description: "A stylish casual shirt for everyday wear.",
      price: 29.99,
      currency: "INR",
      available: true,
    },
    {
      id: 3,
      name: "Formal Suit",
      image: "/images/formal-suit.jpg",
      description: "A classic formal suit for special occasions.",
      price: 29.99,
      currency: "INR",
      available: true,
    },
  ];

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to Our Clothing Rental Portal</h1>
        <h2>Featured Articles</h2>
        <div className={styles.grid}>
          {featuredArticles.map((article) => (
            <ClothingCard
              key={article.id}
              id={article?.id}
              name={article?.name}
              image={article?.image}
              description={article?.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
