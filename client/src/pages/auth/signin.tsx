import { Input } from "@/components";
import { ROUTES } from "@/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */
type IProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
};

export const SignIn = ({ setCurrentPage }: IProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to sign in
      </p>

      <form onSubmit={handleSignIn}>
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          label="Email Address"
          type="email"
          placeholder="john@example.com"
        />
        <Input
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          label="Password"
          type="password"
          placeholder="Min 8 characters"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button type="submit" className="btn-primary">
          LOGIN
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => setCurrentPage(ROUTES.SIGN_UP)}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
};
