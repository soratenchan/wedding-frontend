import Head from 'next/head';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 text-white">
      <Head>
        <title>Wedding App - Your Dream Wedding Planner</title>
        <meta name="description" content="Plan your dream wedding with ease" />
      </Head>

      {/* Hero section */}
      <div className="text-center mt-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Wedding App</h1>
        <p className="text-lg md:text-xl mb-8">Your Dream Wedding Planner</p>
        <Link href="/account/sign-up">
          <div className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full cursor-pointer">
            Get Started
          </div>
        </Link>
      </div>

      {/* About section */}
      <div className="mt-24 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-lg text-center mb-8">
          Wedding App is designed to simplify the wedding planning process. From venue
          selection to guest management, we've got you covered.
        </p>
        {/* Change with figma image here */}
        <img
          src="/path/to/your/image.png"
          alt="About Us"
          className="rounded-lg shadow-lg"
          style={{ maxWidth: '600px' }}
        />
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center">
        <p>&copy; 2024 Wedding App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

/* To Do
Put image, put font, put centered div, animations can be added later, rev up the sign and register with the same thing, add all images from figma to src images */