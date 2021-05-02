import { Box, Text, Link } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";
import { Post } from "../types";

type EntryListProps = {
  posts: Post[];
};

export function EntryList({ posts }: EntryListProps) {
  return (
    <Box>
      {posts.map((post) => {
        return <EntryListItem key={post.guid} post={post} />;
      })}
    </Box>
  );
}

type EntryListItemProps = {
  post: Post;
};

function EntryListItem({ post }: EntryListItemProps) {
  const date = new Date(post.publishedAt);
  const dateISO = parseISO(date.toISOString());

  return (
    <Box my=".75rem">
      <Text as="h3" fontSize="xl">
        <Link href={post.url} color="blue.500" isExternal>
          {post.title}
        </Link>
      </Text>

      <Text as="time" fontSize="sm" color="GrayText">
        {format(dateISO, "yyyy-MM-dd")}
      </Text>
    </Box>
  );
}
