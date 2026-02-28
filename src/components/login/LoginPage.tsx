import LoginForm from "./LoginForm";
import LoginHero from "./LoginHero";
import { motion } from "framer-motion";
const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      {/* Left Side - Hero Section (40% Width) */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex lg:w-[40%] bg-[#12372A]"
      >
        <LoginHero />
      </motion.div>

      {/* Right Side - Form Section (60% Width) */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="flex w-full lg:w-[60%] items-center justify-center bg-white p-8"
      >
        <LoginForm />
      </motion.div>
    </div>
  );
};

export default LoginPage;
