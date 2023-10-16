import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import postData from "../utils/postData";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const url = "http://localhost:5000/reg";

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    // postData(user, url);
  };

  return (
    <div>
      <h2 className="mt-6 text-center text-3xl text-orange-600 font-extrabold ">
        Logi In
      </h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full px-4 py-2 shadow-lg rounded-[20px] focus:ring-[0.5px] focus:ring-orange-600 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your password"
            className="w-full px-4 py-3 shadow-lg rounded-[20px] focus:ring-[0.5px] focus:ring-orange-600  outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-orange-600 shadow-lg text-white mb-4 py-3 px-4 rounded-[20px] hover:bg-orange-300 focus:outline-none hover:scale-105 transition ease-in-out "
          >
            Log In
          </button>

          <button
            onClick={() => props.func("signup")}
            className="w-full outline outline-1 outline-offset-0 outline-orange-600 shadow-lg text-orange-600 py-3 px-4 rounded-[20px] hover:bg-orange-300 hover:text-white hover:outline-none  "
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
