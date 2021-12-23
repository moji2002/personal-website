import Head from "next/head";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Nav from "../components/home/Nav";
import Technologies from "../components/home/Technologies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>mb.</title>
        <meta name="description" content="my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Hero />
        <Technologies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
