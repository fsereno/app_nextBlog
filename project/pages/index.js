import Head from "next/head";
import Cards from "../components/blog/cards";
import Title from "../components/ui/title";
import { getPosts } from "../utils/dal";
import styles from "../styles/main.module.css";
import Description from "../components/ui/description";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Welcome to blog.js</title>
        <meta name="description" content="A blog for all things Javascript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>The Javascript Blog</Title>
      <Description>By Fabio Sereno</Description>
      <div className={styles.grid}>
        <Cards posts={props.posts} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts({ featured: true });
  return {
    props: {
      posts: JSON.stringify(posts),
    },
  };
}
