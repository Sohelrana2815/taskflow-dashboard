import LoginForm from "./LoginForm";
import LoginHero from "./LoginHero";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* বাম পাশ - Hero Section (40% Width) */}
      <div className="hidden lg:flex lg:w-[40%] bg-[#12372A]">
        <LoginHero />
      </div>

      {/* ডান পাশ - Form Section (60% Width) */}
      <div className="flex w-full lg:w-[60%] items-center justify-center bg-white p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
