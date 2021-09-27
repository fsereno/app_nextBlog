import Link from 'next/link';
import Title from "../ui/title"
import postClasses from "../../styles/post.module.css";
import mainClasses from "../../styles/Main.module.css";

export default function Post({children, post, id}) {
    return (
        <>
            <Title>{post.title}</Title>
            <div className={postClasses.controls}>
                <Link href={`/edit/${id}`}><a className={mainClasses.link}>Edit</a></Link>
            </div>
            <div className={postClasses.content}>
                {children}
            </div>
        </>
    )
}