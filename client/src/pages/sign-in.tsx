import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER, ROOT } from "../routes/";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { loginUser } from "../store/auth.slice";
import { LoadingStates } from "../enums";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loginUserSuccess, loginUserStatus } = useAppSelector(
    (state: RootState) => state.authentication
  );

  const initialState = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(loginUser(inputs));
  };

  useEffect(() => {
    if (loginUserSuccess) navigate(ROOT);
  }, [navigate, loginUserSuccess]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://www.pipelinersales.com/wp-content/uploads/2023/03/app-marketplace-logo-badge-microsoft-tasks-1507.png"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={inputs.email}
                autoComplete="email"
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                {/* <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </a> */}
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={inputs.password}
                autoComplete="current-password"
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loginUserStatus === LoadingStates.LOADING}
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {loginUserStatus === LoadingStates.LOADING
                ? "Signing in"
                : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <Link
            to={REGISTER}
            className="font-semibold text-blue-600 hover:text-blue-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
