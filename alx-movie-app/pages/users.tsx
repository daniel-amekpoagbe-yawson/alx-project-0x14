import UserCard from "@/components/commons/UserCard";
import { UserProps } from "@/interfaces";

export default function Users({ posts }: { posts: UserProps[] }) {
  return (
    <main className="bg-linear-to-br from-slate-800 to-slate-950 min-h-screen pt-25 text-gray-100 px-4">
      <div className="mx-auto flex flex-col max-w-6xl gap-4">
        <h1 className="font-xl font-bold">Users</h1>

        <ul className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <UserCard key={post.email} {...post} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/Users");
  const data = (await res.json()) as UserProps[];

  return {
    props: {
      posts: data,
    },
  };
}

// ["import Header from "@/components/layout/Header" ]
// <Header />
