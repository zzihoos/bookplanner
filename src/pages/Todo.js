import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
// import Loading from "../components/Loading";

const Todo = () => {
  const initTodoData = [
    {
      id: 1,
      category: "카테고리",
      title: "책제목",
      author: "지은이",
      publisher: "출판사",
      startday: "2023-06-26",
      endday: "2023-06-28",
      memo: "메모",
      completed: false,
    },
    {
      id: 2,
      category: "카테고리",
      title: "책제목",
      author: "지은이",
      publisher: "출판사",
      startday: "2023-06-26",
      endday: "2023-06-28",
      memo: "메모",
      completed: false,
    },
    {
      id: 3,
      category: "카테고리",
      title: "책제목",
      author: "지은이",
      publisher: "출판사",
      startday: "2023-06-26",
      endday: "2023-06-28",
      memo: "메모",
      completed: false,
    },
    {
      id: 4,
      category: "카테고리",
      title: "책제목",
      author: "지은이",
      publisher: "출판사",
      startday: "2023-06-26",
      endday: "2023-06-28",
      memo: "메모",
      completed: false,
    },
    {
      id: 5,
      category: "카테고리",
      title: "책제목",
      author: "지은이",
      publisher: "출판사",
      startday: "2023-06-26",
      endday: "2023-06-28",
      memo: "메모",
      completed: false,
    },
  ];
  const [todoData, setTodoData] = useState(initTodoData);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   getTodo(setTodoData, setIsLoading);
  // }, []);
  return (
    <>
      <Header />
      <div className="flex items-start justify-center mt-5 w-full">
        {/* {isLoading && <Loading />} */}
        <div className="w-4/5 p-6 bg-white rounded-[8px] shadow relative">
          <div className="mb-8">
            <h1 className="text-center mb-5 w-full text-2xl font-bold text-purple-300">
              Todo-List
            </h1>
            <ul className="flex justify-between mb-5">
              <li>
                <button>전체</button>
              </li>
              <li>
                <button>완료</button>
              </li>
              <li>
                <button>미완료</button>
              </li>
              <li>
                <button>더보기</button>
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div className="text-center text-xl w-1/12">Lv.</div>
              <div className="w-11/12 bg-zinc-500 text-white text-center">
                %
              </div>
            </div>
            <div className="fixed bottom-0 left-30 z-10">
              <button className="w-16 h-16 text-3xl text-yellow-200 bg-slate-400 opacity-50 border rounded-full p-2">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          {/* 할 일 목록 */}
          <List todoData={todoData} setTodoData={setTodoData} />
        </div>
      </div>
    </>
  );
};

export default Todo;
