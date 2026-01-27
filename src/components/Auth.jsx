import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser, signUpUser } from "./../services/PetService";
import Navbar from "./Navbar";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const data = await signUpUser({ name, email, password });
      toast.success(`SignUp Successful! Welcome, ${data.name}`);
      console.log("SignUp Response:", data);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.error || "Sign Up failed");
      console.log(error.response || error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });
      toast.success(`Login Successfull welcome, ${data.name}`);
      console.log("Login Response:", data);
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.error || "Login Failed");
      console.log(error.response || error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="font-['Comic_Sans_MS'] min-h-screen flex items-center justify-center bg-[#fffaf3] px-4">
        <div className="flex w-full max-w-5xl h-[500px] overflow-hidden rounded-[40px] shadow-2xl bg-white">
          {/* Left Image Section */}
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="pet"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 bg-orange-400 text-white flex items-center">
            <div className="w-full px-8 md:px-12">
              <h1 className="text-4xl md:text-5xl font-black mb-3 leading-tight">
                {isLogin ? "Sign In" : "Create Account"}
              </h1>

              <p className="text-white/90 font-medium mb-8">
                Join us & give your pets the best care
              </p>

              <form
                onSubmit={isLogin ? handleLogin : handleSignUp}
                className="space-y-5"
              >
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4
              placeholder-white/70 text-white outline-none
              focus:ring-2 focus:ring-white/40 transition-all"
                  />
                )}

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4
            placeholder-white/70 text-white outline-none
            focus:ring-2 focus:ring-white/40 transition-all"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4
            placeholder-white/70 text-white outline-none
            focus:ring-2 focus:ring-white/40 transition-all"
                />

                <button
                  type="submit"
                  className="w-full bg-white text-orange-500 font-black py-2.5 rounded-2xl
            hover:bg-orange-50 transition-all uppercase tracking-widest text-sm
            shadow-xl hover:shadow-2xl active:scale-[0.98]"
                >
                  {isLogin ? "Sign In" : "Sign Up"}
                </button>
              </form>

              <p className="text-center text-sm text-white/90 mt-6">
                {isLogin ? (
                  <>
                    Don’t have an account?{" "}
                    <span
                      className="font-bold underline cursor-pointer"
                      onClick={() => setIsLogin(false)}
                    >
                      Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      className="font-bold underline cursor-pointer"
                      onClick={() => setIsLogin(true)}
                    >
                      Sign In
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
