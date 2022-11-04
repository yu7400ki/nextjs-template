import styles from "./Card.module.scss";

type Props = {
  href: string;
  title: string;
  description: string;
};

export const Card: React.FC<Props> = ({ href, title, description }) => {
  return (
    <a href={href} className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>
  );
};
