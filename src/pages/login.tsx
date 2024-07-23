import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import logo from "../assets/logo.svg";
import { User } from "../types";

type LoginProps = {
  onLogin: (userData: User) => void;
};

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center gap-16 items-center h-screen mx-6">
      <img src={logo} alt="logo" className="w-8 h-auto" />
      <div className="bg-dark-blue-light rounded-lg p-6 w-full max-w-[400px]">
        <h2 className="text-heading-l font-light mb-10">Login</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col gap-6 mb-10">
            <Input type="email" id="email" placeholder="Email address" />
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="button font-light">
            Login to your account
          </button>
        </form>
        <p className="text-body-m font-light text-center">
          Don't have an account?
          <Link className="text-primary ml-2" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
