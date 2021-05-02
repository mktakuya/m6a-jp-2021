import Link from "next/link";
import { Post } from "../types";
import PublishedAt from "../components/date";

import Parser from "rss-parser";

type HomeProps = {
  recentPosts: Post[];
};

export default function Home({ recentPosts }: HomeProps) {
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <div className="text-center">
            <h1 className="h1">ようこそ mktakuyaのホームページへ</h1>
            <Link href="/profile">
              <a>
                <img
                  src="/images/mktakuya.png"
                  className="rounded mx-auto d-block mt-5 mb-3"
                />
                <p className="lead">入場する</p>
              </a>
            </Link>
          </div>

          <div className="mx-auto w-75 p-3">
            <h2 className="h2">Blog</h2>
            <ul>
              {recentPosts.map((post) => {
                return (
                  <li key={post.guid}>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                    <br />
                    <PublishedAt publishedAtString={post.publishedAt} />
                  </li>
                );
              })}
            </ul>
            <a
              href="https://blog.m6a.jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              もっと読む
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const recentPosts: Post[] = [];

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

  items.slice(0, 5).forEach((post) => {
    recentPosts.push(post);
  });

  return {
    props: {
      recentPosts,
    },
  };
}
