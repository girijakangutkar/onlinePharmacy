import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { RingLoader } from "react-spinners";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const redirectPath = localStorage.getItem("redirectAfterLogin");
      if (redirectPath) {
        localStorage.removeItem("redirectAfterLogin");
        navigate(redirectPath);
      } else {
        navigate("/");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Login error", error.message);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpClick = () => {
    navigate("/Signup");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="absolute top-[40%] left-[44%]">
            <div className="border border-[#ccc] p-10 rounded-md shadow-md">
              <RingLoader color="green" loading size={80} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form
            onSubmit={handleLogin}
            className="border border-[#ccc] p-10 rounded-md shadow-md"
          >
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-2xl text-center">Login</h1>
              {error && (
                <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded">
                  {error}
                </div>
              )}
              <div className="grid gap-3">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-[#ccc] rounded-md p-2 shadow-sm"
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border border-[#ccc] rounded-md p-2 shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full bg-green-400 p-2 text-gray-700 rounded-md shadow-sm"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                variant="link"
                onClick={handleSignUpClick}
                className="underline underline-offset-4 p-0 h-auto"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
