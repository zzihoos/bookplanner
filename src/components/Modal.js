import React, { useState, useEffect } from "react";

const Modal = ({ onClose, handleDelete, info }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleConfirm = () => {
    setIsVisible(false);
    setTimeout(() => {
      handleDelete(info.itodo);
    }, 300);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`w-full h-full flex items-center justify-center fixed top-0 left-0 bg-black/50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div className={`w-[400px] p-5 bg-white rounded-[8px] transform ${isVisible ? "translate-y-0" : "-translate-y-1/4"} transition-transform duration-300`}>
        <h3 className="text-center mb-5 p-3 font-bold text-lg">삭제 하시겠습니까?</h3>
        <p className="text-center p-5">복구가 불가능합니다.</p>
        <div className="flex justify-end">
          <button className="ml-3 p-3 rounded hover:bg-blue-600 hover:text-white" onClick={handleConfirm}>
            확인
          </button>
          <button className="ml-3 p-3 rounded hover:bg-blue-600 hover:text-white" onClick={handleClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
