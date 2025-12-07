import { type CardProps } from "@/interfaces";

export default function Card({
  className,
  title,
  content,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={`bg-gray-100 rounded-md p-4 grid h-fit gap-4 ${className}`}
    >
      <header className="uppercase text-sky-600 font-bold underline underline-offset-4">
        {title}
      </header>
      <p className="text-gray-800 break-all hyphens-auto">{content}</p>
    </div>
  );
}
