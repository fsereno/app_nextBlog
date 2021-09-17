import styles from '../../styles/Headings.module.css';

export default function Title({value}) {
    return <h1 className={styles.title}>{value}</h1>
}