import React from "react";

const PostList = (props) => {
  const { data } = props;
  return (
    <div>
      <h2 className="text-xl my-5">{data.title}</h2>
      <div>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default PostList;
