"use client";
import React, { useState } from "react";
import Button from "./Button";

interface FormModalButtonProps {
  src: string;
  buttonText: string;
  title: string;
}

function FormModalButton({ src, buttonText, title }: FormModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    // Reset loading state if closing
    if (isOpen) setIsLoaded(false);
  };

  return (
    <>
      <Button
        title={buttonText}
        onClick={toggleModal}
        className="w-full md:w-auto !bg-primary/90 backdrop-blur-[4px] !rounded-[20px] overflow-hidden"
      />

      {isOpen && (
        <Modal onClose={toggleModal} title={title}>
          {!isLoaded && <Spinner />}
          <iframe
            src={src}
            className={`w-full h-full border-0 rounded-xl  ${
              !isLoaded ? "hidden" : ""
            }`}
            title={title}
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          />
        </Modal>
      )}
    </>
  );
}

export default FormModalButton;

function Modal({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-auto bg-black/40 p-4 "
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-2xl shadow-xl top-[50%] transform -translate-y-[50%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer text-2xl"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold p-6 pb-0">{title}</h2>
        <div className="aspect-video w-full p-6 pt-4">{children}</div>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <svg
        className="animate-spin h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span className="ml-3 text-primary font-medium">Loading form…</span>
    </div>
  );
}
