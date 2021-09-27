import { useState } from 'react';
import Router from 'next/router';
import classes from '../../styles/form.module.css';

export default function EditorForm({post = {}, id}) {
    const [ title, setTitle ] = useState(post.title || "");
    const [ summary, setSummary ] = useState(post.summary || "");
    const [ content, setContent ] = useState(post.content || "");
    const [ featured, setFeatured ] = useState(post.featured || false);

    const onSubmit = (event) => {
        event.preventDefault();
        const isValid = event.nativeEvent.target.checkValidity();

        if (isValid) {
            const data = {
                id,
                title,
                summary,
                content,
                featured
            }
            fetch('/api/posts/edit', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json()
            .then(data =>  {
                if (id) {
                    Router.push(`/posts/${id}`);
                } else {
                    Router.push('/posts/');
                }
            })).catch(error => console.error(error.message));
        }
    }

    return (
        <form className={classes.form} noValidate onSubmit={onSubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        id='title'
                        required
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='summary'>Summary</label>
                    <input
                        type='text'
                        id='summary'
                        required
                        value={summary}
                        onChange={event => setSummary(event.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='content'>Content</label>
                    <textarea
                        type='text'
                        rows='5'
                        id='content'
                        required
                        value={content}
                        onChange={event => setContent(event.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='featured'>Featured</label>
                    <input
                        type='checkbox'
                        id='featured'
                        checked={featured}
                        onChange={event => { 
                            console.log(event.target.checked)
                            setFeatured(event.target.checked)}

                        }
                    />
                </div>
            </div>
            <div className={classes.actions}>
                <button>Save</button>
            </div>
        </form>
    );
}