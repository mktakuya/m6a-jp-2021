import Link from "next/link";
import Parser from "rss-parser";
import { Post } from "../types";
import PublishedAt from "../components/date";
import { getRecentPosts } from "../lib/posts";

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
  const recentPosts: Post[] = await getRecentPosts({ count: 5 });

  return {
    props: {
      recentPosts,
    },
  };
}
