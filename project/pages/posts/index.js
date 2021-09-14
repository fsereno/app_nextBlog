import Head from 'next/head';
import { Fragment } from 'react';
import { connectDB, getAll } from '../../utils/mongoDbUtil';
import BloggItem from '../../components/blogg-item';
import styles from '../../styles/Home.module.css'


function AllPostsPage(props) {

  const posts = JSON.parse(props.posts);

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='All posts'
          content='All blog posts will be listed here.'
        />
      </Head>
      <div className={styles.container}>
        {posts.map(x => <BloggItem title={x.title} key={x._id} summary={x.summary} /> )}
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {

  let posts  = [];

  try {
    const client = await connectDB();
    const data = await getAll(client, 'posts');
    posts = JSON.stringify(data);
    client.close();
  } catch (error) {
    console.error(error.message);
  }

  return {
    props: {
      posts
    },
    revalidate: 10
  };
}

export default AllPostsPage;