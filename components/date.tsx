import { parseISO, format } from "date-fns";

export default function PublishedAt({ publishedAtString }) {
  const date = new Date(publishedAtString);
  const dateISO = parseISO(date.toISOString());
  return (
    <time dateTime={publishedAtString} className="text-muted">
      {format(dateISO, "yyyy-MM-dd")}
    </time>
  );
}
