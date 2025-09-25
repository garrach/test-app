import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Glassmorphic Next.js App</title>
        <meta name="description" content="Pro UI/UX with Tailwind CSS Glassmorphism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen bg-gradient-to-tr from-purple-700 via-pink-500 to-orange-400 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-10 max-w-md w-full text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Glassmorphic UI</h1>
          <p className="mb-6 text-lg text-white/80">
            Beautiful, modern interface built with Tailwind CSS and Next.js.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white/20 hover:bg-white/40 rounded-lg transition-all duration-300 font-semibold">
              Get Started for free
            </button>
            <button className="px-6 py-3 bg-white/10 border border-white/30 hover:bg-white/20 rounded-lg transition-all duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
