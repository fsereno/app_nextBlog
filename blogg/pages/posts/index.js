import Head from 'next/head';
import { Fragment } from 'react';
import { connectDB, getAll } from '../../utils/mongoDbUtil';

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
      <div>
        {posts.map(x => <p> {x.title} </p> )}
      </div>
    </Fragment>
  );
}

export async function getServerSideProps() {

  let posts  = [];
  let client;

  try {
    client = await connectDB();
    const data = await getAll(client, 'posts');
    posts = JSON.stringify(data);
  } finally {
    client.close();
  }

  return {
    props: {
      test: "Some value",
      posts
    },
  };
}

export default AllPostsPage;