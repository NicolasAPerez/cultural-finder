import "@/styles/globals.css";
import Head from "next/head";
import NavBar from "../../components/Navigation/NavBar";
import Layout from "../../components/Layout";

export default function App({ Component, pageProps }) {
  return(
      <>
          <Head>
              <title>Recipe Rater</title>
              <meta name="description" content="Suggest and Rate Recipes" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </>

      )
}
