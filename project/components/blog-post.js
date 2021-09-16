import styles from '../styles/Home.module.css'

export default function BlogPost({title, summary}) {
    return (
        <a href="#" className={styles.card}>
            <h2>{title}</h2>
            <p>{summary}</p>
        </a>
    )
}