import { useState } from "react";
import Router from "next/router";
import { useSession } from "next-auth/client";

import ErrorMessage from "../ui/error-message";
import mainClasses from "../../styles/main.module.css";

export default function DeleteAction({ id }) {
  const [session] = useSession();
  const [showError, setShowError] = useState(false);

  const deleteHandler = (event) => {
    event.preventDefault();
    if (session) {
      fetch(`/api/posts/delete/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        response
          .json()
          .then((data) => {
            if (!data.error) {
              Router.push("/posts/");
            } else {
              setShowError(true);
            }
          })
          .catch((err) => {
            setShowError(true);
            console.error(err);
          });
      });
    }
  };
  return (
    <>
      <a href="#" className={mainClasses.link} onClick={deleteHandler}>
        Delete
      </a>
      <ErrorMessage show={showError}>
        There was a problem when deleting the post.
      </ErrorMessage>
    </>
  );
}
