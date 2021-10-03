import { getSession } from "next-auth/client";
import Head from "next/head";
import ProfileForm from "../../components/profile/profile-form";
import Description from "../../components/ui/description";
import Title from "../../components/ui/title";

export default function ProfilePage({ session }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="User profile" />
      </Head>
      <Title>User profile</Title>
      <Description>Details for: {session.user.email}</Description>
      <ProfileForm />
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
    props: {
      session,
    },
  };
}
