import Link from "next/link";
import Title from "../ui/title";
import { useSession } from "next-auth/client";
import postClasses from "../../styles/post.module.css";
import mainClasses from "../../styles/main.module.css";

export default function Post({ children, post, id }) {
  const [session] = useSession();
  return (
    <>
      <Title>{post.title}</Title>
      {session && (
        <div className={postClasses.controls}>
          <Link href={`/edit/${id}`}>
            <a className={mainClasses.link}>Edit</a>
          </Link>
        </div>
      )}
      <div className={postClasses.content}>{children}</div>
    </>
  );
}
