import Head from 'next/head';
import Image from 'next/image';
import landingImage from '../../../images/landing.png';
import landingFeather from '../../../images/back2.png';

const LandingPage = () => {
  const weddingDate = "June 20, 2025";

  return (
    <div className="min-h-screen bg-custom-f8f9f7">
      <Head>
        <title>Wedding App - Your Dream Wedding Planner</title>
        <meta name="description" content="Plan your dream wedding with ease" />
      </Head>

      {/* Background color */}
      <div className="relative min-h-screen bg-f8f9f7">
        
        {/* Image container */}
        <div className="absolute inset-0 flex items-center justify-center bg-f8f9f7">
          <Image
            src={landingImage}
            alt="Landing Image"
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-800">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Wedding Gate</h1>
            <div className="text-3xl md:text-4xl font-semibold mb-2">
              <span className="text-pink-600">Ohtani</span> &{' '}
              <span className="text-purple-600">Tanaka</span>
            </div>
            <div className="text-lg mb-2">{weddingDate}</div>
            {/* <div className="mb-4">
              <Image
                src={landingFeather}
                alt="Small Image"
                width={100}
                height={100}
              />
            </div> */}
            <a
              href="/account/sign-up"
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
            >
              Start
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
