"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

function HeroButtons() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isRequestFrameLoaded, setIsRequestFrameLoaded] = useState(false);
  const [isRegisterFrameLoaded, setIsRegisterFrameLoaded] = useState(false);

  const requestIframeRef = useRef<HTMLIFrameElement>(null);
  const registerIframeRef = useRef<HTMLIFrameElement>(null);

  const toggleRequestModal = () => setIsRequestModalOpen((prev) => !prev);
  const toggleRegisterModal = () => setIsRegisterModalOpen((prev) => !prev);

  // Preload both iframes
  useEffect(() => {
    const handleRequestLoad = () => setIsRequestFrameLoaded(true);
    const handleRegisterLoad = () => setIsRegisterFrameLoaded(true);

    const requestIframe = requestIframeRef.current;
    const registerIframe = registerIframeRef.current;

    requestIframe?.addEventListener("load", handleRequestLoad);
    registerIframe?.addEventListener("load", handleRegisterLoad);

    return () => {
      requestIframe?.removeEventListener("load", handleRequestLoad);
      registerIframe?.removeEventListener("load", handleRegisterLoad);
    };
  }, []);

  return (
    <>
      {/* Buttons */}
      <div className="absolute z-30 bottom-16 w-full px-6 flex flex-col items-center gap-4 md:flex-row md:left-18 md:bottom-32 md:gap-8 md:items-start">
        <Button
          title="Pre-register"
          onClick={toggleRegisterModal}
          className="w-full md:w-auto !bg-primary/90 backdrop-blur-[4px] !rounded-[20px] overflow-hidden"
        />

        <Button
          title="Request an Appointment"
          onClick={toggleRequestModal}
          className="w-full md:w-auto !bg-primary/90 backdrop-blur-[4px] !rounded-[20px] overflow-hidden"
        />
      </div>

      {/* 🔒 Preload iframes offscreen */}
      <iframe
        ref={requestIframeRef}
        src="https://wmh.insynchcs.com/APIAppointmentRequest/Index?practiceID=v90n4IZfFGm2f9XLoBqmMg=="
        className="hidden"
      />
      <iframe
        ref={registerIframeRef}
        src="https://wmh.insynchcs.com/PatientRegistration/APIPatientRegistration?practiceID=v90n4IZfFGm2f9XLoBqmMg=="
        className="hidden"
      />

      {/* Request Appointment Modal */}
      {isRequestModalOpen && (
        <Modal onClose={toggleRequestModal} title="Request an Appointment">
          {!isRequestFrameLoaded ? (
            <Spinner />
          ) : (
            <iframe
              src="https://wmh.insynchcs.com/APIAppointmentRequest/Index?practiceID=v90n4IZfFGm2f9XLoBqmMg=="
              className="w-full h-full border-0 rounded-xl"
              title="Appointment Request Form"
              allowFullScreen
            />
          )}
        </Modal>
      )}

      {/* Pre-registration Modal */}
      {isRegisterModalOpen && (
        <Modal onClose={toggleRegisterModal} title="Pre-register">
          {!isRegisterFrameLoaded ? (
            <Spinner />
          ) : (
            <iframe
              src="https://wmh.insynchcs.com/PatientRegistration/APIPatientRegistration?practiceID=v90n4IZfFGm2f9XLoBqmMg=="
              className="w-full h-full border-0 rounded-xl"
              title="Pre-registration Form"
              allowFullScreen
            />
          )}
        </Modal>
      )}
    </>
  );
}

export default HeroButtons;

// ⬇️ Reusable Modal Component
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
      className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/40 p-4"
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

// ⬇️ Spinner Component
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
