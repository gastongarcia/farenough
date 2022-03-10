import Head from "next/head";
import { getAllPosts } from "../lib/posts";
import PostList from "../components/posts-list";
import Image from "next/image";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className="p-10 lg:p-0 w-8/10 lg:w-1/2 mx-auto">
      <Head>
        <title>Far Enough - Health is a few steps away</title>
      </Head>

      <header>
        <div>
          <h1 className="text-3xl my-10">Far Enough</h1>
        </div>
      </header>
      <main>
        {posts.map((p) => (
          <PostList key={p.id} data={p} />
        ))}
      </main>
    </div>
  );
}
