import React from "react";

interface Props {
  onAccept: () => void;
  onDecline: () => void;
  display: boolean;
}

const OnSubmitModal = ({ onAccept, onDecline, display }: Props) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        display ? "flex" : "hidden"
      } fixed inset-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-blue-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-blue-600">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
              Are You Sure?
            </h3>
            <button
              type="button"
              className="text-blue-400 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-blue-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={onDecline}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <p className="text-3xl leading-relaxed text-white">
              Do you want to submit?
            </p>
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-blue-200 rounded-b dark:border-blue-600">
            <button
              onClick={onAccept}
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-blue-700 border border-white-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Accept
            </button>
            <button
              onClick={onDecline}
              data-modal-hide="default-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-white bg-red-800 rounded-lg border border-white-200 hover:bg-red-500 hover:text-white focus:ring-4"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSubmitModal;