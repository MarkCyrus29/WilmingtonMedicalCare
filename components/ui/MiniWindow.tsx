"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Spinner } from "./Spinner";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}

function MiniWindow({
  link,
  title,
  id,
  className,
}: {
  link: string;
  title: string;
  id?: string;
  className?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        id={id}
        className={`${className}`}
      >
        {title}
      </button>

      {isModalOpen && (
        <Modal onClose={toggleModal} title={title}>
          {!iframeLoaded && <Spinner />}
          <iframe
            src={link}
            className={`w-full h-full border-0 rounded-xl transition-opacity duration-300 ${
              iframeLoaded ? "opacity-100" : "opacity-0"
            }`}
            title={title}
            onLoad={() => setIframeLoaded(true)}
            allowFullScreen
          />
        </Modal>
      )}
    </>
  );
}

export default MiniWindow;

export function Modal({ children, onClose, title }: ModalProps) {
  if (typeof document === "undefined") return null;

  return createPortal(
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
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold p-6 pb-0">{title}</h2>
        <div className="aspect-video w-full p-6 pt-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}
