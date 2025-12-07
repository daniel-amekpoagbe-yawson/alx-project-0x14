import { type SpanWithLabelCardProps } from "@/interfaces";

export function SpanWithLabelCard({
  id,
  title,
  content,
}: SpanWithLabelCardProps) {
  return (
    <li>
      <span id={id}>{title}</span>
      <span aria-labelledby={id}>{content}</span>
    </li>
  );
}
