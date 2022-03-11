import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostList = (props) => {
  const { data } = props;
  return (
    <div className="post mb-20">
      <Link href={`/blog/${data.slug}`}>
        <a className="text-2xl my-5">{data.title}</a>
      </Link>
      <div className="img my-3">
        <Image src={data.image} width="1010" height="760" layout="responsive" />
      </div>
      <div className="texts my-10">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default PostList;
