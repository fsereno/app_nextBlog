import styles from '../styles/Home.module.css'

export default function BloggItem({title, summary}) {
    return (
        <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{title}</h2>
            <p>{summary}</p>
        </a>
    )
}