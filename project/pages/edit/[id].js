import EditorForm from "../../components/blog/editor-form";
import { getPostById } from "../../utils/dal";
import Title from "../../components/ui/title";
import { getSession } from "next-auth/client";

export default function EditPage({post, id}) {
  const p = JSON.parse(post);
  return (
    <>
      <Title>Edit Post</Title>
      <EditorForm post={p} id={id} />
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
  const id = params.id;
  const post = await getPostById({ id });

  return {
    props: {
      session,
      id,
      post: JSON.stringify(post)
    },
  };
}


