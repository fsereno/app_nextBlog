import Link from 'next/link';
import Title from "../ui/title"

export default function Post({children, post, id}) {
    return (
        <>
            <Title>{post.title}</Title>
            <Link href={`/edit/${id}`}>Edit</Link>
            {children}
        </>
    )
}