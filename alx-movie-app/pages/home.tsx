import Button from "@/components/commons/Button";
import Card from "@/components/commons/Card";
import PostModal from "@/components/commons/PostModal";
import { CardProps } from "@/interfaces";
import { useCallback, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState(intialPosts);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClose = useCallback(() => setIsModalActive(false), []);
  const handleSubmit = useCallback(
    (post: CardProps) => {
      setPosts((posts) => [post, ...posts]);
      handleClose();
    },
    [handleClose]
  );
  const setActive = useCallback(() => setIsModalActive(true), []);

  return (
    <main className="bg-linear-to-br from-slate-800 to-slate-950 min-h-screen pt-25 text-gray-100 px-4 flex flex-col gap-4">
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
        <h1>Home</h1>

        <ul className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <Card key={post.title} {...post} />
          ))}
        </ul>
      </div>
      {isModalActive && (
        <PostModal onClose={handleClose} onSubmit={handleSubmit} />
      )}
    </main>
  );
}

function intialPosts() {
  return [
    {
      title: "Introducton to Nextjs",
      content:
        "Welcome to this new section where we'll be talking about component and props inside a back nextjs project.",
    },
  ];
}

// ["import Header from "@/components/layout/Header" ]
// <Header />
