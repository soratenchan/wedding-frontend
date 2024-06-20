import SignUp from '@/features/routes/account/components/SignUp';

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <SignUp />
      </div>
    </div>
  );
};

export default page;
