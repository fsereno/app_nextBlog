import Link from 'next/link';

export default function MainNavigation() {
    return (
        <>
            <header>
                <Link href="/">Home</Link>
                <nav>
                    <Link href="/posts">Posts</Link>
                </nav>
            </header>
        </>
    )
}