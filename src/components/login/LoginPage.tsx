import LoginForm from "./LoginForm";
import LoginHero from "./LoginHero";

const LoginPage = () => {
  return (
    <div>
      <h2 className="text-red-500 font-bold text-4xl">Login Page</h2>
      <LoginHero />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
