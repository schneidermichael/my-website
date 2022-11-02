import type { NextPage } from "next";
import Head from "next/head";
import DelayedTitle from "../components/DelayedTitle";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const title = "Welcome to ";
const nameOfPerson = "Michael Schneider";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-gray-900">
      <Head >
        <title>Michael Schneider</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Linkedin and Github links from Michael Schneider"></meta>
      </Head>
      <div className="min-h-screen mx-auto max-w-6xl flex flex-col ">
        <Header/>
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">
            <DelayedTitle
              speed={150}
              firstMessage={title}
              secondMessage={nameOfPerson}
            />
          </h1>

          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <a
              href="https://www.linkedin.com/in/michischneider/"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h2 className="text-2xl font-bold dark:text-white">LinkedIn &rarr;</h2>
            </a>

            <a
              href="https://github.com/schneidermichael"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h2 className="text-2xl font-bold dark:text-white">GitHub &rarr;</h2>
            </a>
          </div>
        </main>
        <Footer name="Michael Schneider" />
      </div>
    </div>
  );
};

export default Home;
