import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ClothingCardProps {
  id: number;
  name: string;
  image: string;
  description?: string;
}

const ClothingCard: React.FC<ClothingCardProps> = ({
  id,
  name,
  image,
  description,
}) => {
  return (
    <div className="clothing-card">
      <Image src={image} alt={name} className="clothing-image" />
      <h3 className="clothing-name">{name}</h3>
      <p className="clothing-description">{description}</p>
      <Link href={`/clothing/${id}`}>
        <a className="view-details">View Details / Book Now</a>
      </Link>
    </div>
  );
};

export default ClothingCard;
