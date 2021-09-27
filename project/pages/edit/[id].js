import EditorForm from "../../components/blog/editor-form";
import { getPostById } from "../../utils/dal";
import Title from "../../components/ui/title";

export default function EditPage(props) {
  const post = JSON.parse(props.post);
  return (
    <>
      <Title>Edit Post</Title>
      <EditorForm post={post} id={props.id} />
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
