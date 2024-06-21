import Head from 'next/head';
import Image from 'next/image';
import landingImage from '../../../images/landing.png';
import landingFeather from '../../../images/leaf.png';

// Constants
const groomName = "大谷";
const brideName = "田中";
const weddingDate = "11.11.2023";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-custom-background">
      <Head>
        <title>Wedding App - Your Dream Wedding Planner</title>
        <meta name="description" content="Plan your dream wedding with ease" />
      </Head>

      {/* Background Color */}
      <div className="relative min-h-screen bg-f8f9f7">
        
        {/* Image Container */}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Wedding Gate</h1>
            <div className="text-3xl md:text-4xl font-semibold mb-8">
              <span className="text-green-600">{groomName}</span><br />
              <span className="text-green-500">{brideName}</span>
            </div>
            <div className="text-lg mb-12 text-green-600 font-semibold font-courier">
              {weddingDate}
            </div>
            <div className="flex items-center justify-center pb-8">
              <Image
                src={landingFeather}
                alt="Small Image"
                width={100}
                height={100}
              />
            </div>
            <div className="flex justify-center">
              <a
                href="/account/sign-up"
                className="custom-box font-sans text-black cursor-pointer"
              >
                始める
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
