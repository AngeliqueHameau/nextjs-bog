import Link from "next/link";
// import Script from "next/script";
import Head from "next/head";
import Layout, { name } from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post of me - in pages/posts/first-post.js</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(
            `hello ${name}:script loaded correctly, window.FB has been populated`
          )
        } */}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
