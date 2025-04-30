import { NextApiRequest, NextApiResponse } from "next";
import { ClothingArticle } from "../types/Clothing";

let clothingArticles: ClothingArticle[] = [
  {
    id: 1,
    name: "Summer Dress",
    available: true,
    image: "/images/summer-dress.jpg",
    price: 29.99,
    currency: "INR",
  },
  {
    id: 2,
    name: "Formal Suit",
    available: true,
    image: "/images/formal-suit.jpg",
    price: 29.99,
    currency: "INR",
  },
  {
    id: 3,
    name: "Casual Shirt",
    available: true,
    image: "/images/casual-shirt.jpg",
    price: 29.99,
    currency: "INR",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      res.status(200).json(clothingArticles);
      break;
    case "POST":
      const newArticle = { id: Date.now(), ...req.body };
      clothingArticles.push(newArticle);
      res.status(201).json(newArticle);
      break;
    case "PUT":
      const { id } = req.body;
      clothingArticles = clothingArticles.map((article) =>
        article.id === id ? { ...article, ...req.body } : article
      );
      res.status(200).json({ message: "Article updated" });
      break;
    case "DELETE":
      clothingArticles = clothingArticles.filter(
        (article) => article.id !== parseInt(req.query.id as string)
      );
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
