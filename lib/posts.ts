import Parser from "rss-parser";
import { Post } from "../types";

type GetRecentPostsProps = {
  count: number;
};

export async function getRecentPosts({ count }: GetRecentPostsProps) {
  const parser = new Parser();

  const feed = await parser.parseURL("https://blog.m6a.jp/rss");
  const items: Post[] = feed.items.map((item) => {
    const postItem: Post = {
      guid: item.guid,
      title: item.title,
      publishedAt: item.pubDate,
      url: item.link,
    };
    return postItem;
  });

  return items.slice(0, count);
}
