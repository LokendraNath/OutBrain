import { LogIn, PencilRulerIcon } from "lucide-react";
import { Button } from "../UI/Button";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        fullName,
        email,
        password,
      });
    } catch (error) {}

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex gap-20 items-center justify-center bg-blue-500 text-white">
      {/* Left Side */}
      <div className="">
        <div className="inline-flex items-center">
          <h1 className="mb-3 text-[25px]"> OutBrain</h1>
        </div>
        <h1 className="text-5xl font-bold mb-2">Hi Hellow</h1>
        <h3 className="text-2xl mb-4 opacity-80">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </h3>
        <h6 className="text-md opacity-70">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet
          voluptas quisquam?
        </h6>
      </div>
      {/* Right Side */}
      <div className="bg-white text-black px-3 py-5 rounded-xl flex flex-col items-center w-sm">
        <h1 className="text-2xl mb-10 font-bold">Welcome Back !!!</h1>
        <div className="px-5 flex items-center flex-col w-full">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="inputBoxStyle"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="inputBoxStyle"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="inputBoxStyle"
          />
          <Button
            varient="primary"
            text="SignUp"
            onClick={handleSignUp}
            endIcon={<LogIn size={23} />}
            className="mt-3 w-full"
          />
        </div>
        <p className="my-5 text-gray-600">- OR -</p>
        <p className="text-xs cursor-pointer text-blue-600 underline">
          Already Have Account?
        </p>
      </div>
    </div>
  );
};
export default SignUp;
