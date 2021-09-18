import Title from "../ui/title"

export default function Post({children, post}) {
    return (
        <>
            <Title value={post.title}/>
            {children}
        </>
    )
}