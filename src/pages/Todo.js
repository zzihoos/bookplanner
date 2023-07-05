import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodo } from "../api/fetch";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import { ExpProgressBar } from "../components/ProgreesBar";

const Todo = () => {
  const [level, setLevel] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [todoListOrigin, setTodoListOrigin] = useState([]);

  useEffect(() => {
    todoDataList();
  }, []);

  const todoDataList = async () => {
    const result = await getTodo();
    setLevel(result.level);
    setTodoList(result.icategory || []);
    setTodoListOrigin(result.icategory || []);
  };

  const handleAll = () => {
    console.log("전체목록");
    const updatedTodoList = todoListOrigin.map(item => item);
    setTodoList(updatedTodoList);
  };
  const handleFinish = () => {
    console.log("완실행");
    const updatedTodoList = todoListOrigin.filter(item => item.del === 1);
    setTodoList(updatedTodoList);
  };

  const handleNotFinish = () => {
    console.log("미완실행");
    const updatedTodoList = todoListOrigin.filter(item => item.del !== 1);
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <Header />
      <div className="flex items-start justify-center w-full bg-gray-100">
        <div className="mt-5 w-4/5 p-6 bg-white rounded-[8px] shadow relative">
          <div className="mb-8">
            <h1 className="text-center mb-5 w-full text-2xl font-bold text-purple-300">
              Todo-List
            </h1>
            <ul className="flex justify-between mb-5">
              <li>
                <button className="px-5 py-3" onClick={handleAll}>
                  전체보기
                </button>
              </li>
              <li>
                <button className="px-5 py-3" onClick={handleFinish}>
                  완료
                </button>
              </li>
              <li>
                <button className="px-5 py-3" onClick={handleNotFinish}>
                  미완료
                </button>
              </li>
              <li>
                <button className="px-5 py-3">더보기</button>
              </li>
            </ul>
            <ExpProgressBar
              todoList={todoList}
              level={level}
              setLevel={setLevel}
            />
            <div className="fixed bottom-0 left-64 z-40">
              <Link to="/add">
                <button className="w-16 h-16 text-3xl text-yellow-200 bg-slate-400 opacity-50 border rounded-full p-2">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </Link>
            </div>
          </div>
          <div>
            {todoList.map(item => {
              return (
                <ListItem
                  key={item.itodo}
                  item={item}
                  todoList={todoList}
                  setTodoData={setTodoList}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
