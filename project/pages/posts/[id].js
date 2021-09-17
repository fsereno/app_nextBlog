import { getPostById } from '../../utils/dal';

export default function PostPage(props) {
    const post = JSON.parse(props.post);
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{props.id}</p>
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const post = await getPostById({id: params.id});
    return {
        props: {
            id: params.id,
            post: JSON.stringify(post)
        }
    }
}