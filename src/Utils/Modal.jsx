import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="modal-box bg-[#0f172a] text-white p-10 rounded-lg shadow-lg w-full max-w-4xl border border-blue-500">
        <h3 className="font-bold text-2xl text-blue-400">{title}</h3>
        <div className="py-6 text-gray-300 text-lg">{children}</div>
        <div className="modal-action flex justify-end">
          <button
            className="btn bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg transition-all text-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
