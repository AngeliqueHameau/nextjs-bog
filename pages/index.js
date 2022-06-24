import Head from "next/head";
import Layout, { siteTitle, name } from "../components/layout";
import Alert from "../components/alert";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle} in pages/index.js {name}
        </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Alert success>hello</Alert>

        <p>[Your Self Introduction] : My name is {name}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
