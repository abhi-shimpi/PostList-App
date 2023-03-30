import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from 'react';

/*
One important rule to keep in mind that 
When we are writing/importing  any component inside some file then it must start with capital letter if we write it in lwc then react will consider it as default element like <div/>

*/
function App(){
  const [modalIsVisible, setmodalIsVisible] = useState(false); //Setting 
  
  function showModalHandler(){
    setmodalIsVisible(true);
  }
  function hideModalHandler() {
    setmodalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <PostList postStatus={modalIsVisible} onHidePost={hideModalHandler} />
      </main>
    </>
    
  )

  // <Post /> self closing tag
  // <Post/> cant do this because we have to bundle all components in a single element 
  // <Post/>
  // <Post/>

  // so we have to do like this
  
}


export default App;

// // import React from 'react'
// import React, { useEffect, useState } from 'react';


// const App = () => {
//   useEffect(()=>{
//     alert("I am clicked");
// },[]); 
//   var val = "Abhishek shimpi";
//   const [initName, setName] = useState(0)
//   const [initNames, setNames] = useState(0)
  
//   // const changeName = () => {
//   //   val = "ABhi";
//   //   setName(initName + 1);
//   //   setNames(initNames + 1);
//   // }

//   return (
//     <>
//       <h1>{initName}</h1>
//       <button onClick={() => {
//         val = "ABhi";
//         setName(initName + 1);
//       }}>Click Here</button>

//     <h1>{initNames}</h1>
//       <button onClick={() => {
//         val = "ABhi";
//         setNames(initNames + 1);
//       }}>Click Here</button>
//     </>
//   )
// }


// export default App