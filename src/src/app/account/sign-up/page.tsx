import Head from 'next/head';
import Image from 'next/image';
import SignUpForm from '@/features/routes/account/components/SignUp';
import landingImage from '../../../images/landing.png';
import landingFeatherUp from '../../../images/leafup.png';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-custom-background">
      <Head>
        <title>Sign Up - Wedding App</title>
        <meta name="description" content="Sign up for Wedding App" />
      </Head>

      {/* Background Image Container */}
      <div className="relative min-h-screen bg-f8f9f7">
        {/* Background Image */}
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
            <div className="text-3xl md:text-4xl font-semibold mb-40">
              <span className="text-green-600">大谷</span><br />
              <span className="text-green-500">田中</span>
            </div>
            {/* Empty Character for Spacing */}
            <div className="text-lg mb-80 text-custom-background font-semibold font-courier">
            ۪
            </div>
          </div>
        </div>
        
        {/* Sign-Up Form Section */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center">
          <div className="mt-8">
            <SignUpForm />
          </div>
        </div>

        {/* Leaf Image */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mb-20">
          <Image
            src={landingFeatherUp}
            alt="Leaf Image"
            width={60}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
