import React from "react";
import Head from "next/head";
import { getAllSlugs, getPostData } from "../../lib/posts";
import Header from "../../components/header";
import PostList from "../../components/posts-list";

const BlogPost = (props) => {
  const { postData } = props;
  return (
    <div className="p-10 lg:p-0 w-8/10 lg:w-1/2 mx-auto">
      <Head>
        <title>Far Enough - Health is a few steps away</title>
      </Head>

      <Header />
      <main>
        <PostList key={postData.id} data={postData} />
      </main>
    </div>
  );
};

export default BlogPost;

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};
