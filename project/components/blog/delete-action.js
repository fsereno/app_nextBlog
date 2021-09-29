import Router from 'next/router';
import { useSession } from "next-auth/client";
import mainClasses from "../../styles/main.module.css";

export default function DeleteAction({id}) {
    const [session] = useSession();
    const deleteHandler = event => {
        event.preventDefault();
        if (session) {
            fetch(`/api/posts/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json",
                }
            }).then(response => {
                response.json().then(data => {
                    if (!data.error) {
                        Router.push('/posts/');
                    }
                });
            }).catch(err => console.error(err));
        }
    }
    return (
        <a href="#" className={mainClasses.link} onClick={deleteHandler}>Delete</a>
    )
}