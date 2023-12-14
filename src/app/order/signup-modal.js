import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoginModal from ".//modal";

const SignupModal = ({ onClose, onModalSwitch }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    // Reset password match status
    setPasswordsMatch(true);

    // Proceed with form submission or other actions
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSwitchToLogin = () => {
    setIsLoginForm(true);
  };
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        style={{ backgroundColor: "rgb(222, 217, 217)" }}
        className="w-full max-w-[80vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[30vw] h-[70vh] relative opacity-90 rounded-lg p-8 overflow-y-auto"
      >
        <div className="absolute left-0 top-0 h-[8vh] sm:h-[10vh] pr-11 justify-start items-center inline-flex">
          <div className="mt-[2vw] ml-[2vw] w-[18vw] sm:w-[22vw] h-[8vh] sm:h-[10vh] text-left text-black text-4xl font-bold font-condensed">
            SIGN UP.
          </div>
        </div>

        <button
          onClick={handleCloseClick}
          className="absolute right-0 top-0 m-4 text-xl text-black"
        >
          X
        </button>

        <form className="pt-[3vw] flex flex-col gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left text-black text-2xl font-bold font-condensed"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-black text-2xl font-bold font-condensed"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-left text-black text-2xl font-bold font-condensed"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-black text-2xl font-bold font-condensed"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400 ${
                !passwordsMatch ? "border border-red-500" : ""
              }`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="text-black text-2xl font-bold font-condensed"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400 ${
                !passwordsMatch ? "border border-red-500" : ""
              }`}
            />
          </div>

          {!passwordsMatch && (
            <p className="text-red-500 text-sm">Passwords do not match.</p>
          )}

          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="mt-8 w-full h-[7vh] px-4 bg-yellow-400 rounded-full text-black text-3xl font-bold font-['Roboto Condensed']"
              onClick={handleSubmit}
            >
              SIGN UP
            </button>
            <div className="mt-4">
              Already signed up?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={onModalSwitch}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal-sup-root") || document.body
  );
};

export default SignupModal;
