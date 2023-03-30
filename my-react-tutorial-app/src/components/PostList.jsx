import Post from "./Post"
import NewPost from './NewPost';
import { useEffect, useState } from 'react';
import Modal from "./Modal";
import classes from "./PostList.module.css"

function PostList({ postStatus, onHidePost }) {
    const [posts, setPost] = useState([]);
    const [isFetching , setFetching] = useState();

    useEffect(()=>{  // Whenever there is change in DOM or any API request get exe 
        // use Effect wille get executed
        async function fetchPosts(){
            setFetching(true);
            const response = await fetch('http://localhost:8080/posts/');
            const resData = await response.json();
            setPost(resData.posts);
            setFetching(false);
        }
        fetchPosts();
    },[])

    function onSetPostHandler(postData) {
        fetch('http://localhost:8080/posts/',{
            method:'POST',
            body: JSON.stringify(postData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        setPost((existingPost) => [postData, ...existingPost])
    }

    let contentVisible;

    if (postStatus) {
        contentVisible = <Modal close={onHidePost}>
            <NewPost onStopPost={onHidePost} onAddPost={onSetPostHandler} />
        </Modal>
    }


    return (
        <>
            {postStatus ? contentVisible : false}

            {!isFetching && posts.length > 0 && <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} body={post.body} author={post.author} />)}
            </ul>}

            {!isFetching && posts.length===0 && 
            <div style={{textAlign:"center" , color:"white"}}>
                <h2>There is no post.</h2>
                <p>Create new post!</p>
            </div>
            }
            
            {isFetching &&
            <h5 style={{textAlign:"center" ,color:"white"}} >Loading posts ....</h5>
            }
        </>
    );
}

export default PostList;


/*
Three aproaches to check modalIsvisible variables value

1) Using ternary Operator
2) Using && oprator 
3) Using variable in which we can store Modal code
*/