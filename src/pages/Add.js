import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" text-center text-lg font-semibold leading-7 text-gray-900 p-2">도서 계획 정보입력</h2>
      

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              독서 시작일
            </label>
            <div className="mt-2">
              <input
                type="date"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              독서 종료일
            </label>
            <div className="mt-2">
              <input
                type="date"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              도서 검색
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              카테고리
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              지은이
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              출판사
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              메모
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <button
            className="border rounded px-3 py-2 shadow"
            onClick={() => {
              navigate("/todo");
            }}
          >
            등록
          </button>
        </div>
        </div>
    </>
  );
};

export default Add;
