import LoginForm from "./LoginForm";
import LoginHero from "./LoginHero";

const LoginPage = () => {
  return (
    <div className="flex items-center">
      {" "}
      {/*and it will use flex as my design pattern like left side hero content and right side login form*/}
      {/* Need to give 40 % width for Login hero */}
      <h2 className="text-red-500 font-bold text-4xl">Login Page</h2>
      <LoginHero />
      {/* Need to give 60% width for Login form */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
