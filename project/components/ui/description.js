import styles from "../../styles/headings.module.css";

export default function Description({ children }) {
  return <p className={styles.description}>{children}</p>;
}
