import EditorForm from '../../components/blog/editor-form';
import Post from '../../components/blog/post';
import { getPostById } from '../../utils/dal';

export default function PostPage(props) {
    const post = JSON.parse(props.post);
    return (
        <>
            <EditorForm post={post} />
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const post = await getPostById({id: params.id});
    return {
        props: {
            post: JSON.stringify(post)
        }
    }
}