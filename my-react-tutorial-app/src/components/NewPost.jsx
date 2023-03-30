import classes from './NewPost.module.css';
import { useState } from 'react';
// import {useState} from 'react';

function NewPost(props) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function BodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function AuthorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    function SubmitHandler(event){
        event.preventDefault();
        const postData = {
            body : enteredBody,
            author : enteredAuthor
        }
        props.onAddPost(postData);
        console.log(postData);
        props.onStopPost();
    }
    
    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={BodyChangeHandler} />
            </p>
            <p>
                <label htmlFor="author">Your name</label>
                <input type="text" id="author" required onChange={AuthorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button onClick={props.onStopPost}>Cancel</button>
                <button >Submit</button>
            </p>
        </form>
    );
}

export default NewPost;