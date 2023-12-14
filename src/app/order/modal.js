import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import SignupModal from ".//signup-modal";

const LoginModal = ({ onClose, onModalSwitch, children, title }) => {
  // const [showSignupModal, setShowSignupModal] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupAfterLogin, setShowSignupAfterLogin] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLoginClick = () => {
    setShowSignupAfterLogin(true);
    setShowLoginModal(true);
  };
  const handleLoginModalClose = () => {
    setShowSignupAfterLogin(false);
    // Additional logic for handling the close of the login modal
  };
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }
    // onClose();
    setIsSignUpOpen(true);
    // handleSignUpClick();
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
    onClose();
  };
  const handleSignUpClick = () => {
    setShowSignupModal(true);
  };

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        style={{ backgroundColor: "rgb(222, 217, 217)" }}
        className="w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[70vh] relative opacity-90 rounded-lg overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-[8vh] sm:h-[10vh] pr-11 justify-start items-center inline-flex">
          <div className="ml-[3vh] mt-[3vh] w-[18vw] sm:w-[22vw] h-[8vh] sm:h-[10vh] text-left text-black text-4xl font-bold font-['Roboto Condensed']">
            LOGIN.
          </div>
        </div>

        <button
          onClick={handleCloseClick}
          className="absolute right-0 top-0 m-4 text-xl text-black"
        >
          X
        </button>

        <form className="absolute left-[3vw] top-[18vh] w-[90%] sm:w-[80%]">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left pl-[1vh] text-black text-2xl font-bold font-['Roboto Condensed']"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-left pl-[1vh] text-black text-2xl font-bold font-['Roboto Condensed']"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4 ml-4">{errorMessage}</p>
          )}
          {/* <button
            type="submit"
            className="mt-[10vh] w-full h-[7vh] px-4 bg-yellow-400 rounded-full text-black text-3xl font-bold font-['Roboto Condensed']"
            onClick={handleSubmit}
          >
            LOGIN
          </button> */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="mt-[5vh] w-full h-[7vh] px-4 bg-yellow-400 rounded-full text-black text-3xl font-bold font-['Roboto Condensed']"
              onClick={handleSubmit}
            >
              LOGIN
            </button>
            {/* Don't have an account? Sign up link */}
            <div className="mt-4">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={onModalSwitch}
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  // return ReactDOM.createPortal(
  //   modalContent,
  //   document.getElementById("modal-root") || document.body
  // );
  return (
    <>
      {ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") || document.body
      )}
      {/* {showSignupModal && <SignupModal onClose={handleSignUpClose} />} */}
    </>
  );
};

export default LoginModal;
