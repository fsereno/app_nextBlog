import Post from "../../components/blog/post";
import { getPostById } from "../../utils/dal";

export default function PostPage(props) {
  const post = JSON.parse(props.post);
  return (
    <>
      <Post post={post} id={props.id} content={props.content} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const post = await getPostById({ id: params.id });
  return {
    props: {
      id: params.id,
      post: JSON.stringify(post),
    },
  };
}
