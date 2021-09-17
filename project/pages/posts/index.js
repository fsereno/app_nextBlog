import Head from 'next/head';
import { getPosts } from '../../utils/dal';
import Cards from '../../components/blog/cards';
import styles from '../../styles/Home.module.css';
import Title from '../../components/ui/title';

export default function AllPostsPage(props) {
  const posts = JSON.parse(props.posts);
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='All blog posts will be listed here.'
        />
      </Head>
      <div className={styles.container}>
      <Title value="All posts"/>
        <div className={styles.grid}>
          <Cards posts={posts} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts  = await getPosts();
  return {
    props: {
      posts: JSON.stringify(posts)
    },
    revalidate: 10
  };
}
