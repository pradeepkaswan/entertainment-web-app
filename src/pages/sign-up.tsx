import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Input } from "../components/input";
import { User } from "../types";

type SignUpProps = {
  onSignUp: (userData: User) => void;
};

const SignUp: React.FC<SignUpProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center gap-16 items-center h-screen mx-6">
      <img src={logo} alt="logo" className="w-8 h-auto" />
      <div className="bg-dark-blue-light rounded-lg p-6 w-full max-w-[400px]">
        <h2 className="text-heading-l font-light mb-10">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col gap-6 mb-10">
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat Password"
            />
          </div>
          <button type="submit" className="button font-light">
            Create an account
          </button>
        </form>
        <p className="text-body-m font-light text-center">
          Already have an account?
          <Link className="text-primary ml-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
