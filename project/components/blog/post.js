import Link from "next/link";
import Title from "../ui/title";
import DeleteAction from "../blog/delete-action";
import { useSession } from "next-auth/client";
import postClasses from "../../styles/post.module.scss";
import headingsClasses from "../../styles/headings.module.css";
import mainClasses from "../../styles/main.module.css";

export default function Post({ post, id }) {
  const [session] = useSession();
  return (
    <>
      <Title>{post.title}</Title>
      <h4 className={headingsClasses.summary}>{post.summary}</h4>
      {session && (
        <div className={postClasses.controls}>
          <Link href={`/edit/${id}`}>
            <a className={mainClasses.link}>Edit</a>
          </Link>
          <DeleteAction id={id} />
        </div>
      )}
      <div
        className={postClasses.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </>
  );
}
