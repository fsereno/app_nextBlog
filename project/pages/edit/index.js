import { getSession } from "next-auth/client";
import EditorForm from "../../components/blog/editor-form";
import Title from "../../components/ui/title";

export default function AddPage() {
  return (
    <>
      <Title>Add Post</Title>
      <EditorForm />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
