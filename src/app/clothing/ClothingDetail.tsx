import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookingForm from "../../components/BookingForm";
import { Article } from "../types/Article";

const ClothingDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        try {
          const response = await fetch(`/api/clothing/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch article");
          }
          const data = await response.json();
          setArticle(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred");
          }
        } finally {
          setLoading(false);
        }
      };
      fetchArticle();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div>
      <h1>{article.name}</h1>
      <Image src={article.image} alt={article.name} />
      <p>{article.description}</p>
      <h2>Booking Options</h2>
      <BookingForm articleId={article.id} />
    </div>
  );
};

export default ClothingDetail;
