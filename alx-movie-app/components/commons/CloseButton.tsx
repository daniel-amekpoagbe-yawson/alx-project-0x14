import { type CloseButtonProps } from "@/interfaces";

export default function CloseButton({
  onClose,
  className,
  ...props
}: CloseButtonProps) {
  return (
    <button
      type="button"
      {...props}
      onClick={onClose}
      className={`relative cursor-pointer flex p-1 group bg-sky-100 hover:bg-sky-200 rounded-full size-8 max-w-8 max-h-8, ${className}`}
    >
      <div className="h-4 absolute left-1/2 top-1/2 -translate-1/2 bg-sky-600 group-hover:bg-sky-800 w-0.5 rotate-45"></div>
      <div className="h-4 absolute left-1/2 top-1/2 -translate-1/2 bg-sky-600 group-hover:bg-sky-800 w-0.5 -rotate-45"></div>
    </button>
  );
}
