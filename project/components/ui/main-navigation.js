import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import classes from "../../styles/main-navigation.module.css";
import mainClasses from "../../styles/main.module.css";

export default function MainNavigation() {
  const [session, loading] = useSession();
  const logoutHandler = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <>
      <header className={classes.header}>
        <Link href="/">
          <a className={`${mainClasses.link} ${classes.logo}`}>Blog.js</a>
        </Link>
        <nav>
          <Link href="/">
            <a className={mainClasses.link}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={mainClasses.link}>Posts</a>
          </Link>
          {!session && !loading && (
            <Link href="/login">
              <a className={mainClasses.link}>Login</a>
            </Link>
          )}
          {session && (
            <>
            <Link href="/edit">
              <a className={mainClasses.link}>Add</a>
            </Link>
            <Link href="/profile">
              <a className={mainClasses.link}>Profile</a>
            </Link>
            <a href="#" className={mainClasses.link} onClick={logoutHandler}>
              Logout
            </a>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
