import { type PostModalProps } from "@/interfaces";
import { type FormEvent, useCallback, useLayoutEffect, useState } from "react";
import Button from "./Button";
import CloseButton from "./CloseButton";

export default function PostModal({ onClose, onSubmit }: PostModalProps) {
  const [data, setData] = useState({ title: "", content: "" });

  useLayoutEffect(() => {
    document.documentElement.classList.add("overflow-hidden");

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      onSubmit(data);
    },
    [onSubmit, data]
  );

  return (
    <div className="bg-white/10 backdrop-blur-md w-screen fixed inset-0 h-screen flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white h-fit mt-20 w-full text-slate-900 grid gap-2 max-w-9/10 md:max-w-xl rounded-xl p-4"
      >
        <CloseButton onClose={onClose} className="ml-auto" />
        <header className="font-bold text-2xl">Add a new post</header>
        <label className="grid gap-2 h-fit py-2">
          <span>Title</span>

          <input
            type="text"
            value={data.title}
            className="outline-gray-400 outline rounded-md px-4 py-1.5"
            required
            onChange={(e) =>
              setData((data) => ({ ...data, title: e.target.value }))
            }
          />
        </label>

        <label className="grid gap-2 h-fit py-2">
          <span>Content</span>

          <textarea
            value={data.content}
            required
            className="outline-gray-400 outline rounded-md px-4 py-1.5 resize-none"
            onChange={(e) =>
              setData((data) => ({ ...data, content: e.target.value }))
            }
          />
        </label>

        <Button type="submit" className="ml-auto" shape="rounded-md">
          Create post
        </Button>
      </form>
    </div>
  );
}
