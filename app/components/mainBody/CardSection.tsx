import { useState } from "react";
import styling from "./CardSection.module.css";
import SingleCard from "./SingleCard";

const items = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6KBimdFuAwwDyym6WARKSo58ppzy5olr2w&s",
    title: "Product Name",
    price: "$25",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqTTo6PFxlrjCsf3H0ZNReQbiEc77lbyzSw&s",
    title: "Out of Stock",
    price: "$30",
  },
  {
    image:
      "https://brownliving.in/cdn/shop/files/premium-cotton-canvas-tote-bag-mandala-black-eco-vibes-sustainable-tote-bag-brown-living-evtbmdb024-152548_325x.jpg?v=1724959452",
    title: "Product Name 2",
    price: "$35",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmExn3al2u-Zcj1RPkYlw-H2_5cVDgX-_fLw&s",
    title: "Product Name 3",
    price: "$40",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6KBimdFuAwwDyym6WARKSo58ppzy5olr2w&s",
    title: "Product Name",
    price: "$25",
  },
  {
    image:
      "https://www.11cart.com/cdn/shop/products/Hc3f21deeedd049c29b1395d2e0884d53T.jpg_960x960_e18b4f78-b5ac-4e2a-b9e6-4416a89701ce.webp?v=1675952489",
    title: "Out of Stock",
    price: "$30",
  },
  {
    image:
      "https://toyloft.in/cdn/shop/collections/premium_toys.jpg?v=1731499891",
    title: "Product Name 2",
    price: "$35",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmExn3al2u-Zcj1RPkYlw-H2_5cVDgX-_fLw&s",
    title: "Product Name 3",
    price: "$40",
  },
  {
    image:
      "https://brownliving.in/cdn/shop/files/premium-cotton-canvas-tote-bag-mandala-black-eco-vibes-sustainable-tote-bag-brown-living-evtbmdb024-152548_325x.jpg?v=1724959452",
    title: "Product Name 2",
    price: "$35",
  },
];

const CardSection: React.FC = () => {
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const toggleLike = (index: number) => {
    setLikedItems((prev) => {
      const newLikedItems = new Set(prev);
      if (newLikedItems.has(index)) {
        newLikedItems.delete(index);
      } else {
        newLikedItems.add(index);
      }
      return newLikedItems;
    });
  };

  return (
    <div className={styling.container}>
      {items.map((item, index) => (
        <SingleCard
          key={index}
          item={item}
          index={index}
          isLiked={likedItems.has(index)}
          toggleLike={toggleLike}
        />
      ))}
    </div>
  );
};

export default CardSection;
