import Button from "@/components/commons/Button";
import PostCard from "@/components/commons/PostCard";
import PostModal from "@/components/commons/PostModal";
import { CardProps, PostProps } from "@/interfaces";
import { useCallback, useState } from "react";

export default function Posts({ posts: intialPosts }: { posts: PostProps[] }) {
  const [posts, setPosts] = useState(intialPosts);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClose = useCallback(() => setIsModalActive(false), []);
  const handleSubmit = useCallback(
    (post: CardProps) => {
      setPosts((posts) => [{ ...post, userId: posts.length + 1 }, ...posts]);
      handleClose();
    },
    [handleClose]
  );
  const setActive = useCallback(() => setIsModalActive(true), []);

  return (
    <main className="bg-linear-to-br from-slate-800 to-slate-950 min-h-screen pt-25 text-gray-100 px-4">
      <div className="mx-auto flex flex-col max-w-6xl gap-4">
        <Button
          type="button"
          aria-label="Click to add a new post"
          shape="rounded-md"
          onClick={setActive}
          className="ml-auto"
        >
          Add a new post
        </Button>
        <h1 className="font-xl font-bold">Posts</h1>

        <ul className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </ul>
      </div>

      {isModalActive && (
        <PostModal onClose={handleClose} onSubmit={handleSubmit} />
      )}
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await res.json()) as (PostProps & { body: string })[];

  return {
    props: {
      posts: data.map((post) => ({ ...post, content: post.body })),
    },
  };
}

// // ["import Header from "@/components/layout/Header" ]
// <Header />
