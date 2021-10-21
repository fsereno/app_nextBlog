import Head from "next/head";
import AuthForm from "../../components/auth/auth-form";

export default function LoginPage(props) {
  return (
    <>
      <Head>
        <title>User Login</title>
        <meta name="description" content="User login and signup." />
      </Head>
      <AuthForm allowUserCreate={props.allowUserCreate} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      allowUserCreate: process.env.ALLOW_USER_CREATE === "true",
    },
  };
}
