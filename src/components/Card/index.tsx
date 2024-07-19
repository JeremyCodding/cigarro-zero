import styles from "./card.module.css";

type CardProps = {
  title: string;
  image: string;
  description: string;
};

export default function Card({ title, image, description }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card_image} />
      <div className={styles.card_content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
