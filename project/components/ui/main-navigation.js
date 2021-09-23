import Link from 'next/link';
import classes from '../../styles/main-navigation.module.css';

export default function MainNavigation() {
    return (
        <>
            <header className={classes.header}>
                <Link href="/"><a className={`${classes.link} ${classes.logo}`}>Blog.js</a></Link>
                <nav>
                    <Link href="/"><a className={classes.link}>Home</a></Link>
                    <Link href="/posts"><a className={classes.link}>Posts</a></Link>
                    <Link href="/edit"><a className={classes.link}>Add</a></Link>
                    <Link href="/login"><a className={classes.link}>Login</a></Link>
                </nav>
            </header>
        </>
    )
}