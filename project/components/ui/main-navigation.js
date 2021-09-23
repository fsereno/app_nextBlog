import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import classes from '../../styles/main-navigation.module.css';

export default function MainNavigation() {
    const [session, loading] = useSession();
    const logoutHandler = (e) => {
        e.preventDefault();
        signOut();
    }
    return (
        <>
            <header className={classes.header}>
                <Link href="/"><a className={`${classes.link} ${classes.logo}`}>Blog.js</a></Link>
                <nav>
                    <Link href="/"><a className={classes.link}>Home</a></Link>
                    <Link href="/posts"><a className={classes.link}>Posts</a></Link>
                    {session && <Link href="/edit"><a className={classes.link}>Add</a></Link>}
                    {!session && !loading && (
                        <Link href="/login"><a className={classes.link}>Login</a></Link>
                    )}
                    {session && <a href="#" className={classes.link} onClick={logoutHandler}>Logout</a>}
                </nav>
            </header>
        </>
    )
}