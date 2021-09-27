import styles from "../../styles/headings.module.css";

export default function Description({ value }) {
  return <p className={styles.description}>{value}</p>;
}
