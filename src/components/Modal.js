import React from "react";

const Modal = ({ onClose, handleDelete, info }) => {
  return (
    <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-black/50">
      <div className="w-[400px] p-5 bg-white rounded-[8px] -translate-y-1/4">
        <h3 className="text-center mb-5 p-3 font-bold text-lg">
          삭제 하시겠습니까?
        </h3>
        <p className="text-center p-5">복구가 불가능합니다.</p>
        <div className="flex justify-end">
          <button
            className="ml-3 p-3 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => handleDelete(info.itodo)}
          >
            확인
          </button>
          <button
            className="ml-3 p-3 rounded hover:bg-blue-600 hover:text-white"
            onClick={onClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
