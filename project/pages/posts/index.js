import { getSession } from "next-auth/client";
import Head from "next/head";
import { getPosts } from "../../utils/dal";
import Cards from "../../components/blog/cards";
import styles from "../../styles/main.module.css";
import Title from "../../components/ui/title";

export default function AllPostsPage(props) {
  const editorPosts = JSON.parse(props.posts);
  const allPublishedPosts = editorPosts.filter((post) => post.published);
  const posts = props.session ? editorPosts : allPublishedPosts;
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="All blog posts will be listed here."
        />
      </Head>
      <Title>All posts</Title>
      <div className={styles.grid}>
        <Cards posts={posts} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const posts = await getPosts();
  return {
    props: {
      posts: JSON.stringify(posts),
      session,
    },
  };
}
