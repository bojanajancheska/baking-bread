import React from "react";
import ReactDOM from "react-dom";

const LoginModal = ({ onClose, children, title }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        style={{ backgroundColor: "rgb(222, 217, 217)" }}
        className="w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[70vh] relative opacity-90 rounded-lg overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-[8vh] sm:h-[10vh] pr-11 justify-start items-center inline-flex">
          <div className="ml-[3vh] mt-[3vh] w-[18vw] sm:w-[22vw] h-[8vh] sm:h-[10vh] text-left text-black text-4xl font-bold font-condensed">
            LOGIN.
          </div>
        </div>

        <button
          onClick={handleCloseClick}
          className="absolute right-0 top-0 m-4 text-xl text-black"
        >
          X
        </button>

        <form className="absolute left-[3vw] top-[20vh] w-[90%] sm:w-[80%]">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left pl-[1vh] text-black text-2xl font-bold font-condensed"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-left pl-[1vh] text-black text-2xl font-bold font-condensed"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full h-[7vh] px-4 bg-yellow-400 rounded-full focus:outline-none focus:bg-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="mt-[10vh] w-full h-[7vh] px-4 bg-yellow-400 rounded-full text-black text-3xl font-bold font-condensed"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") || document.body
  );
};

export default LoginModal;
