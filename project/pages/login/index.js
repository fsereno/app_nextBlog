import Head from 'next/head';
import AuthForm from '../../components/auth/auth-form';

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
            <AuthForm />
        </>
    )
}