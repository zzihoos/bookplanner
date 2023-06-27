import React, { useState } from "react";
import Header from "../components/Header";


const Edit = ({ todoData, setTodoData }) => {
  const [startDay, setStartDay] = useState("2023-06-27");
  const [endDay, setEndDay] = useState("2023-06-28");
  const [date, setDate] = useState(`${startDay} ~ ${endDay}`);
  const [memo, setMemo] = useState("메모");
  const [completed, setCompleted] = useState(false);
  const handleDateChange = e => {
    setDate(e.target.value);
  };
  const handleMemoChange = e => {
    setMemo(e.target.value);
  };
  const handleCompletedChange = e => {
    setCompleted(e.target.value);
  };
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded">
        <form action="" className="w-1/2 border bg-white mt-5">
          <div className="flex item-center justify-center text-center py-5">
            <p className="w-[100px]">도서 카테고리 : </p>
            <p className="w-1/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow">
              카테고리
            </p>
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <p className="w-[100px]">책 제목 : </p>
            <p className="w-1/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow">
              책 제목
            </p>
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <p className="w-[100px]">지은이 : </p>
            <p className="w-1/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow">
              지은이
            </p>
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <p className="w-[100px]">출판사 : </p>
            <p className="w-1/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow">
              출판사
            </p>
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <p className="w-[100px]">날짜 : </p>
            <input
              type="text"
              className="w-1/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
              value={date}
              onChange={e => handleDateChange(e)}
            />
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <p className="w-[100px]">메모 : </p>
            <input
              type="text"
              className="w-1/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
              value={memo}
              onChange={e => handleMemoChange(e)}
            />
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <p className="w-[100px]">완료 유무 : </p>
            <input
              type="text"
              className="w-1/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
              value={completed}
              onChange={e => handleCompletedChange(e)}
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center gap-10">
        <button className="px-8 py-3 bg-green-400 text-white rounded-md">
          수정
        </button>
        <button className="ml-14 px-8 py-3 bg-red-500 text-white rounded-md">
          삭제
        </button>
      </div>
    </div>

  );
};

export default Edit;
