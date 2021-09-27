import styles from '../../styles/main.module.css';

export default function Container({children}) {
    return  <div className={styles.container}>{children}</div>
}