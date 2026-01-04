import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // let email = "random";
  // const [email, setEmail] = useState("");
  //useRef --> importance
  //Hw --> useRef on password
  const email = useRef("");
  const password = useRef("");
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  const signIn = () => {
    const current_email = email.current.value.trim();
    const current_password = password.current.value.trim();

    if (!current_email || !current_password) {
      setValidationError("Email and Password are required fields");
      return;
    }

    //Email format validation
    //Regex
    //HW - try to decode it,
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(current_email)) {
      setValidationError("Invalid Email");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,}$/;
    if (!passwordRegex.test(current_password)) {
      setValidationError(
        "passeord must be of 8 characters and include an uppercase,lowercase,a special character and a number"
      );
      return;
    }
    // if (!/.{8,}/.test(current_password)) {
    //   setValidationError("Password must be of 8 characters");
    //   return;
    // }
    // if (!/[a-z]/.test(current_password)) {
    //   setValidationError("Atleast one character should be in lowercase");
    //   return;
    // }
    // if (!/[A-Z]/.test(current_password)) {
    //   setValidationError("Password must have one capital letter");
    //   return;
    // }
    // if (!/[!@#$%^&*()]/.test(current_password)) {
    //   setValidationError("Must include a special character");
    //   return;
    // }
    // if (!/[0-9]/.test(current_password)) {
    //   setValidationError("Password must have a numerical");
    //   return;
    // }

    // Regex validation for password
    //min 8, max 25, 1 spl, 1 cap

    // if(!current_email.includes('@')) return "Invalid";
    // if (!current_email.endsWith('.com') || !) return "Invalid";
    //validations.

    // Bug, clear validation message-HW

    console.log(email.current.value);
    console.log(password.current.value);

    const EXPIRY = 60 * 60 * 1000;

    // 123123123123123 ==> elapsed from 2000 12 00 AM jan1
    // [], dic, object
    let loginData = {
      email: email.current.value,
      password: password.current.value,
      expiry: Date.now() + EXPIRY,
    };

    localStorage.setItem("auth", JSON.stringify(loginData));

    //try to create a useContext, isLoggedIN
    // await signIn()
    navigate("/restaurant");
    navigate("/restaurantDetails");
    navigate("/offers");
    setValidationError("");
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
              ref={password}
            />
          </div>
          <div className="text-red-500 text-xs m-3">{validationError}</div>
          <button className="border border-solid border-violet-400 m-3 hover:bg-gray-200 transition delay-150 duration-300 rounded-md">
            <span className="m-2" onClick={signIn}>
              Sign in
            </span>
          </button>
          <div className="m-3">
            New User? Click{" "}
            <span
              onClick={() => navigate("/sign-up")}
              className="text-blue-600 cursor-pointer underline"
            >
              here
            </span>{" "}
            to sign up!
            {/* useNavigate - HW*/}
          </div>
        </div>
      </div>
    </div>
  );
};

//localstorage, sessionstorage, cookiestorage (databases)
// 3 ways to store data in our browser
// localstore (key:vlaue) --> it will stay there forever, //5mb --> session storage, cookie --256kb,
// when i close and open
// until we clear
// local storage operations are extremely heavy,
// synchronous and will block the mian thread.
// js is a sync, single threaded,

// s

// Authguardfs --> Will prevnt us from proceding furthur, it just navigate us back to login page.

export default SignIn;
