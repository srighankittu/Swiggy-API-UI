import { useRef } from "react";

const SignIn = () => {
  // let email = "random";
  // const [email, setEmail] = useState("");
  //useRef --> importance
  //Hw --> useRef on password
  const email = useRef("");

  const signIn = () => {
    console.log(email.current.value);
  };

  return (
    <div className="flex justify-center m-15">
      <div className="w-[250px] border border-solid border-black rounded-xl bg-gray-100">
        <div>
          <div className="flex flex-col m-3">
            <span>Email</span>
            <input
              className="border border-solid rounded-md"
              type="text"
              placeholder="Enter email"
              ref={email}
            />
          </div>
          <div className="flex flex-col m-3">
            <span>Password</span>
            <input
              className="border border-solid rounded-md"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <button className="border border-solid border-violet-400 m-3 hover:bg-gray-200 transition delay-150 duration-300 rounded-md">
            <span className="m-2" onClick={signIn}>
              Sign in
            </span>
          </button>
          <div className="m-3">
            New User? Click <span>here</span> to sign up!
          </div>
        </div>
      </div>
    </div>
  );
};

//localstorage, sessionstorage, cookiestorage
export default SignIn;
