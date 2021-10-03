import { getSession } from "next-auth/client";
import Head from 'next/head';
import ProfileForm from "../../components/auth/profile-form";
import Title from '../../components/ui/title';

export default function(props) {
    return(
        <>
        <Head>
            <title>All Posts</title>
            <meta
            name="description"
            content="User profile"
            />
        </Head>
      <Title>User profile</Title>
      <ProfileForm />
      </>
    )
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
            session
        }
    }
}