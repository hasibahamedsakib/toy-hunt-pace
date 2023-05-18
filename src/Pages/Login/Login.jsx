import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  const logo = "https://i.ibb.co/wYD5mjJ/R-4-removebg-preview.png";
  return (
    <div className="bg-slate-400 ">
      <div className=" container ">
        <div className="w-60 text-center  mx-auto">
          <img src={logo} className=" mx-auto w-28 h-28" alt="toy hunt logo" />
        </div>
        <div className="w-[600px] bg-white mx-auto p-10 rounded-lg">
          <form className="flex flex-col gap-4 ">
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
                id="email1"
                type="email"
                name="email"
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
                name="password"
                type="password"
                required={true}
              />
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
