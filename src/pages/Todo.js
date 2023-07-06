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

  const handleFinish = () => {
    const updatedTodoList = todoListOrigin.filter(item => item.finish === 1);
    setTodoList(updatedTodoList);
  };

  const handleNotFinish = async () => {
    await todoDataList();
    const updatedTodoList = todoListOrigin.filter(item => item.finish === 0);
    setTodoList(updatedTodoList);
  };

  useEffect(() => {
    const initialTodoList = todoListOrigin.filter(item => item.finish === 0);
    setTodoList(initialTodoList);
  }, [todoListOrigin]);

  return (
    <>
      <Header />
      <div className="flex items-start justify-center w-full bg-gray-100">
        <div className="mt-5 w-4/5 p-6 bg-white rounded-[8px] shadow relative min-w-[500px]">
          <div className="mb-8">
            <h1 className="text-center mb-5 w-full text-2xl font-semibold text-gray-400">
              Todo-List
            </h1>
            <ul className="flex justify-evenly mb-5">
              <li>
                <button
                  className="w-[100px] px-5 py-3 border rounded-lg hover:bg-zinc-200"
                  onClick={handleFinish}
                >
                  완료
                </button>
              </li>
              <li>
                <button
                  className="w-[100px] px-5 py-3 border rounded-lg hover:bg-zinc-200"
                  onClick={handleNotFinish}
                >
                  미완료
                </button>
              </li>
            </ul>
            <ExpProgressBar
              todoList={todoList}
              level={level}
              setLevel={setLevel}
              todoListOrigin={todoListOrigin}
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
                  setTodoList={setTodoList}
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
