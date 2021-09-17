import styles from '../../styles/Headings.module.css';

export default function Description({value}) {
    return <p className={styles.description}>{value}</p>
}