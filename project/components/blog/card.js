import Link from 'next/link';
import styles from '../../styles/card.module.css'

export default function Card({title, summary, id}) {
    return (
        <Link href={`/posts/${id}`}>
            <a className={styles.card}>
                <h2>{title}</h2>
                <p>{summary}</p>
            </a>
        </Link>
    )
}