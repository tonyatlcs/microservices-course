/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import PostCrteate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCrteate />
      <hr></hr>

      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
