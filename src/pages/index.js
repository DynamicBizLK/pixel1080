import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Showcase from "../components/Showcase";

export default function Home({ posts }) {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    posts.length && setPostsData(posts);
  }, [posts]);

  return (
    <>
      <Head>
        <title>Pixel1080 by DynamicBiz</title>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>

      <main>
        <Hero />
        <Services />
        <Showcase posts={postsData} />
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://euci82jz.api.sanity.io/v1/data/query/production?query=${query}`;

  const results = await fetch(url).then((res) => res.json());

  if (!results.result || !results.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: results.result,
      },
    };
  }
};
