import EditorForm from "../../components/blog/editor-form";
import { getPostById } from "../../utils/dal";
import Title from "../../components/ui/title";
import { getSession } from "next-auth/client";

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
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  const { params } = context;
  const post = await getPostById({ id: params.id });

  return {
    props: {
      session,
      post: JSON.stringify(post)
    },
  };
}


