import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import Header from "../components/header";
import PostList from "../components/posts-list";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className="p-10 lg:p-0 w-8/10 lg:w-1/2 mx-auto">
      <Head>
        <title>Far Enough - Health is a few steps away</title>
      </Head>
      <Header />
      <main>
        {posts.map((p) => (
          <PostList key={p.id} data={p} />
        ))}
      </main>
    </div>
  );
}
