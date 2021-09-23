import Head from 'next/head';
import Title from "../../components/ui/title";

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>User Login</title>
                <meta
                    name='description'
                    content='User login and signup.'
                />
            </Head>
            <Title>Login</Title>
        </>
    )
}