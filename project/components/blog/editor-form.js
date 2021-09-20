import { useState } from 'react';
import classes from '../../styles/editor-form.module.css';

export default function EditorForm({post}) {
    const [ title, setTitle ] = useState(post.title);
    const [ summary, setSummary ] = useState(post.summary);
    const [ content, setContent ] = useState(post.content);

    const onSubmit = (event) => {
        event.preventDefault();
        const isValid = event.nativeEvent.target.checkValidity();

        if (isValid) {
            console.log("submit to api");
        }

        console.log(isValid);
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
            </div>
            <div className={classes.actions}>
                <button>Save</button>
            </div>
        </form>
    );
}