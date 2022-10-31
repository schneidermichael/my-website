import type { NextPage } from "next";
import Head from "next/head";
import DelayedTitle from "../components/DelayedTitle";

const title = "Welcome to ";
const nameOfPerson = "Michael Schneider";

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Michael Schneider</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">
            <DelayedTitle speed={150} firstMessage={title} secondMessage={nameOfPerson}/>
          </h1>

          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <a
              href="https://www.linkedin.com/in/michischneider/"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">LinkedIn &rarr;</h3>
            </a>

            <a
              href="https://github.com/schneidermichael"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">GitHub &rarr;</h3>
            </a>
          </div>
        </main>

        <footer className="flex h-14 w-full items-center justify-center border-t">
          <span className="flex items-center justify-center gap-2">
            @ Michael Schneider | 2022 - today
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
