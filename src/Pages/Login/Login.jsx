import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const logo = "https://i.ibb.co/wYD5mjJ/R-4-removebg-preview.png";
const Login = () => {
  const { userLogin, googleLogin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  const handleLogin = (value) => {
    setError("");
    if (value.password.length < 6) {
      return setError("password must be 6 character");
    }
    if (value.email.length < 1) {
      return setError("Please provide your email address");
    }

    userLogin(value.email, value.password)
      .then((result) => {
        const currentUser = result.user;
        Swal.fire(
          `Yahoo!! ${currentUser && currentUser?.displayName}`,
          "Login SuccessFull...",
          "success"
        );
        navigate(from || "/");
      })
      .catch((error) => {
        return setError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;

        Swal.fire(
          `Hurrah!! ${user && user?.displayName}`,
          "Google Login SuccessFull...",
          "success"
        );
        navigate(from || "/");
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="bg-slate-400 ">
      <div className=" container ">
        <div className="w-60 text-center  mx-auto">
          <img src={logo} className=" mx-auto w-28 h-28" alt="toy hunt logo" />
        </div>
        <div className="w-[600px] bg-white mx-auto p-10 rounded-lg">
          <form
            className="flex flex-col gap-4 "
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="text-center text-slate-500 space-y-2">
              <h2 className="text-4xl font-bold  ">Sign In</h2>
              <hr />
              <p>Enter your e-mail address and your password</p>
            </div>
            <div>
              <div className="mb-2 block">
                <Label color="light" htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                sizing="md"
                color="light"
                type="email"
                {...register("email")}
                placeholder="email@example.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  color="light"
                  htmlFor="password1"
                  value="Your password"
                />
              </div>
              <TextInput
                sizing="md"
                color="light"
                id="password1"
                {...register("password")}
                type="password"
                required={true}
              />
            </div>
            <Label className="text-red-500 my-1">{error}</Label>
            <div className="flex items-center gap-2">
              <Checkbox
                className="text-slate-500 focus:outline-slate-500 hover:border-none"
                id="remember"
              />

              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button
              size="lg"
              //   gradientDuoTone="pinkToOrange"
              className="bg-gray-700 hover:bg-slate-600"
              type="submit"
            >
              login
            </Button>
          </form>
          <p className="text-sm font-light text-gray-500 py-3">
            Do not have an account yet ?
            <Link
              to="/register"
              className="font-medium text-orange-500 hover:underline ml-2"
            >
              Sign up
            </Link>
          </p>
          <p className="font-bold text-center py-4 ">Or Sign In with</p>
          <div className="text-center flex justify-center space-x-5">
            <FaGoogle
              onClick={handleGoogleLogin}
              className=" h-12 w-12 border rounded-full p-3 text-slate-600 cursor-pointer hover:bg-slate-100"
            />
            <FaFacebookF className=" h-12 w-12 border rounded-full p-3 text-slate-600 cursor-pointer hover:bg-slate-100" />
            <FaGithub className="h-12 w-12 border rounded-full p-3 text-slate-600 cursor-pointer hover:bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
