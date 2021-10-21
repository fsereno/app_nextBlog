import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Router from "next/router";
import ErrorMessage from "../ui/error-message";
import classes from "../../styles/form.module.css";

export default function EditorForm({ post = {}, id }) {
  const [title, setTitle] = useState(post.title || "");
  const [summary, setSummary] = useState(post.summary || "");
  const [content] = useState(post.content || "");
  const [featured, setFeatured] = useState(post.featured || false);
  const [showError, setShowError] = useState(false);
  const editorRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const isValid = event.nativeEvent.target.checkValidity();
    if (isValid) {
      const cont = editorRef.current.getContent();
      const data = {
        id,
        title,
        summary,
        content: cont,
        featured,
      };
      fetch("/api/posts/edit", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) =>
        response
          .json()
          .then((data) => {
            if (!data.error) {
              if (id) {
                Router.push(`/posts/${id}`);
              } else {
                Router.push("/posts/");
              }
            } else {
              setShowError(true);
            }
          })
          .catch((error) => {
            setShowError(true);
            console.error(error.message);
          })
      );
    }
  };
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            id="summary"
            required
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="content">Content</label>
          <Editor
            id="content"
            apiKey="4qbicqfxozwdpc10twuleaerv04botzndceu9rtb6gn8bk6w"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={content}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="featured">Featured</label>
          <input
            type="checkbox"
            id="featured"
            checked={featured}
            onChange={(event) => {
              setFeatured(event.target.checked);
            }}
          />
        </div>
      </div>
      <ErrorMessage show={showError}>
        There was a problem saving your changes.
      </ErrorMessage>
      <div className={classes.actions}>
        <button>Save</button>
      </div>
    </form>
  );
}
