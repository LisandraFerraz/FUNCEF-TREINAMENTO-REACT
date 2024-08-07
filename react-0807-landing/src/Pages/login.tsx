import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const data = {
    name: "Lisandra",
    age: 21,
    company: "Digisystem",
  };

  const [userDetails, setUserDetails] = useState(data);

  function Login() {
    localStorage.setItem("@userInfo", JSON.stringify(userDetails));

    console.log("User Info | ", localStorage.getItem("@userInfo"));

    return () => {
      localStorage.removeItem("@userInfo");
    };
  }

  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          {/* <Link to="/">
            <button onClick={Login}>Login</button>
          </Link> */}

          <div className=" flex flex-col w-full items-center justify-center">
            <div className="w-[330px]">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Informe seu e-mail"
                  className="block w-full rounded-md border-0 py-1.5 px-4  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                </div>
              </div>
            </div>
            <div className="w-[330px]">
              <Link to="/">
                <button
                  className="bg-gray-300 bg-opacity-60 hover:opacity-80 transition-all rounded-md  w-[330px] mt-10 text-gray-600 h-[45px] hover:cursor-pointer"
                  onClick={Login}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
