import Head from 'next/head';
import Image from 'next/image';
import SignUpForm from '@/features/routes/account/components/SignUp';
import landingImage from '../../../images/landing.png'; // Ensure correct path to your image

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-custom-f8f9f7">
      <Head>
        <title>Sign Up - Wedding App</title>
        <meta name="description" content="Sign up for Wedding App" />
      </Head>

      {/* Background image container */}
      <div className="relative min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-center">
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
        <div className="absolute inset-0 flex items-center justify-center text-center text-gray-800">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
