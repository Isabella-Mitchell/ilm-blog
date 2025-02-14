import { allPosts, Post } from "@/.contentlayer/generated";
import Link from "next/link";

const formatToDate = (post: Post): any => {
  return { ...post, date: new Date(post.date) };
};

const formatToString = (post: any): Post => {
  return { ...post, date: post.date.toString() };
};

export default function Home() {
  const allPostsOrdered = [...allPosts]
    .sort((post1, post2) => formatToDate(post2).date - formatToDate(post1).date)
    .map((post) => formatToString(post));

  return (
    <div className="prose dark:prose-invert">
      {allPostsOrdered.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
