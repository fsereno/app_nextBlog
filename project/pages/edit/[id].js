import EditorForm from '../../components/blog/editor-form';
import { getPostById } from '../../utils/dal';

export default function PostPage(props) {
    const post = JSON.parse(props.post);
    return (
        <>
            <EditorForm post={post} id={props.id} />
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