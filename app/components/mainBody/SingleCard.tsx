import { IoIosHeartEmpty } from "react-icons/io";
import styling from "./SingleCard.module.css";

type CardProps = {
  item: {
    image: string;
    title: string;
    price: string;
  };
  index: number;
  isLiked: boolean;
  toggleLike: (index: number) => void;
};

const SingleCard: React.FC<CardProps> = ({
  item,
  index,
  isLiked,
  toggleLike,
}) => {
  // Placeholder image URL
  const placeholderImage =
    "https://cdn.pixabay.com/photo/2024/04/20/17/17/ai-generated-8709127_640.png";

  return (
    <div className={styling.card}>
      <img
        src={item.image || placeholderImage}
        alt={item.title}
        className={`${styling.image} ${
          item.title === "Out of Stock" ? styling.blurImage : ""
        }`}
      />

      <div className={styling.cardContent}>
        <div className={styling.title}>{item.title}</div>
        <div className={styling.cardLast}>
          <p>
            <u style={{ cursor: "pointer" }}>Sign in</u> or Crete account to See
            the price
          </p>
          <div
            className={`${styling.heartIcon} ${isLiked ? styling.liked : ""}`}
            onClick={() => toggleLike(index)}
          >
            <IoIosHeartEmpty size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
