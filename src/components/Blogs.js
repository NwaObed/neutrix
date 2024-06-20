import React from "react";

function Blog(props) {
  return (
    <div className="blog">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Blog;