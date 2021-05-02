import { Avatar, Box, Grid, Link, Heading, Text } from "@chakra-ui/react";
import { Post } from "../types";
import { getRecentPosts } from "../lib/posts";
import { Layout } from "../components/Layout";
import { EntryList } from "../components/EntryList";

type HomeProps = {
  recentPosts: Post[];
};

export default function Home({ recentPosts }: HomeProps) {
  return (
    <Layout>
      <Box as="header" maxWidth="42rem" mx="auto" textAlign="center">
        <Avatar size="2xl" name="mktakuya" src="/images/mktakuya.png" />

        <Heading as="h1" size="2xl" m="1rem 0">
          Takuya Mukohira
          <Text fontSize="smaller" color="GrayText">
            mktakuya
          </Text>
        </Heading>
      </Box>

      <Box maxWidth="42rem" m="1rem auto">
        <Grid mx="auto" templateColumns="repeat(3, 1fr)" gap={6}>
          <Link
            href="https://twitter.com/mktakuya"
            textAlign="center"
            w="100%"
            color="blue.500"
            isExternal
          >
            Twitter
          </Link>
          <Link
            href="https://facebook.com/mktakuya"
            textAlign="center"
            w="100%"
            color="blue.500"
            isExternal
          >
            Facebook
          </Link>
          <Link
            href="https://github.com/mktakuya"
            textAlign="center"
            w="100%"
            color="blue.500"
            isExternal
          >
            GitHub
          </Link>
        </Grid>
      </Box>

      <Box maxWidth="42rem" m="2rem auto">
        <Text fontSize="xl" my="0.5rem">
          北海道千歳市出身 / 神奈川県在住のソフトウェアエンジニア。
          <br />
          <Link href="https://yuru28.com" color="blue.500" isExternal>
            ゆるふわPodcast
          </Link>
          のホスト・編集者。
          <br />
        </Text>
      </Box>

      <Box maxWidth="42rem" mx="auto" my="2rem">
        <Heading as="h2" size="xl" m="1rem 0">
          Blog
        </Heading>

        <EntryList posts={recentPosts} />
      </Box>
    </Layout>
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
