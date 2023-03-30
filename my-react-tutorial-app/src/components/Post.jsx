import classes from './Post.module.css'

function Post(props){
    // const arr = ["abhishek","darshan"];
    // const choosenName = Math.random() > 0.5 ? arr[0] : arr[1];

    const author = props.author;
    const body = props.body;
    return(
        <>
            <li className={classes.post}>
                <p className={classes.author}>{author}</p>
                <h1 className={classes.text}>{body}</h1>
            </li>
        
        </>
    )
}

export default Post;