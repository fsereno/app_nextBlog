import styles from '../../styles/Card.module.css'

export default function Card({title, summary}) {
    return (
        <a href="#" className={styles.card}>
            <h2>{title}</h2>
            <p>{summary}</p>
        </a>
    )
}