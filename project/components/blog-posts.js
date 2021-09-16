import BlogPost from "./blog-post"

export default function BlogPosts(props) {

    const posts = typeof props.posts === 'string' ? JSON.parse(props.posts) : props.posts;

    return (
        <>
            {
                posts.map(post =>
                    <BlogPost title={post.title} key={post._id} summary={post.summary} />
                )
            }
        </>
    )
}