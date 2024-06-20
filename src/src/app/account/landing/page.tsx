import Head from 'next/head';
import Link from 'next/link';

const LandingPage = () => {
  const weddingDate = "June 20, 2025";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-gradient-to-r from-purple-700 to-pink-600 text-white"
         style={{ backgroundImage: "url('/images/landing.png')" }}>
      <Head>
        <title>Wedding App - Your Dream Wedding Planner</title>
        <meta name="description" content="Plan your dream wedding with ease" />
      </Head>

      {/* Hero section */}
      <div className="text-center mt-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Wedding Gate</h1>
        <div className="text-3xl md:text-4xl font-semibold mb-8">
          <span className="text-pink-300">Ohtani</span> & <span className="text-purple-300">Tanaka</span>
        </div>
        <p className="text-lg md:text-xl mb-8">Your Dream Wedding Planner</p>
        <Link href="/account/sign-up">
          <div className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full cursor-pointer">
            Get Started
          </div>
        </Link>
      </div>

      {/* Wedding date */}
      <div className="text-center mt-16">
        <p className="text-2xl md:text-3xl font-bold mb-4">Save the Date</p>
        <p className="text-lg md:text-xl mb-8">{weddingDate}</p>
      </div>

      {/* Small image */}
      <div className="mt-16">
        <img
          src="/images/back1.png"
          alt="Couple"
          className="rounded-lg shadow-lg"
          style={{ maxWidth: '300px' }}
        />
      </div>

      {/* About section */}
      <div className="mt-24 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-lg text-center mb-8">
          Wedding App is designed to simplify the wedding planning process. From venue
          selection to guest management, we've got you covered.
        </p>
        <img
          src="/images/back1.png"
          alt="About Us"
          className="rounded-lg shadow-lg"
          style={{ maxWidth: '600px' }}
        />
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center">
        <p>&copy; 2024 Wedding Gate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
