import React from "react";
import Header from "../components/Header";

const Edit = () => {

  const handleDateChange = e => {
    // setDate(e.target.value);
  };
  const handleMemoChange = e => {
    // setMemo(e.target.value);
  };
  const handleCompletedChange = e => {
    // setCompleted(e.target.value);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded">
        <form className="w-4/5 border bg-white mt-5 rounded">
          <div className="flex item-center justify-center text-center py-5">
            <label className="w-[200px]">도서 카테고리 : </label>
            <input
              type="text"
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
              // value={cate}
              readOnly
            />
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <label className="w-[200px]">책 제목 : </label>
            <input
              type="text"
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
              // value={title}
              readOnly
            />
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <label className="w-[200px]">지은이 : </label>
            <input
              type="text"
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
              // value={author}
              readOnly
            />
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <label className="w-[200px]">출판사 : </label>
            <input
              type="text"
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
              // value={publisher}
              readOnly
            />
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <label className="w-[200px]">날짜 : </label>
            <input
              type="text"
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
              // value={date}
              onChange={e => handleDateChange(e)}
            />
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <label className="w-[200px]">메모 : </label>
            <input
              type="text"
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
              // value={memo}
              onChange={e => handleMemoChange(e)}
            />
          </div>
          <div className="flex item-center justify-center text-center pb-5">
            <label className="w-[200px]">완료 유무 : </label>
            <input
              type="text"
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
              // value={completed}
              onChange={e => handleCompletedChange(e)}
            />
          </div>
        </form>
        <div className="flex justify-center gap-10 p-7">
          <button className="px-8 py-3 bg-green-400 text-white rounded-md">
            수정
          </button>
          <button className="ml-14 px-8 py-3 bg-red-500 text-white rounded-md">
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default Edit;
