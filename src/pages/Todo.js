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
  const [progress, setProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    todoDataList();
  }, []);

  useEffect(() => {
    const initialTodoList = todoListOrigin?.filter(item => item.finish === 0);
    setTodoList(initialTodoList);
  }, [todoListOrigin]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 60;

      if (scrollY > threshold && !isFixed) {
        setIsFixed(true);
      } else if (scrollY <= threshold && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  const todoDataList = async () => {
    const result = await getTodo();
    setLevel(result.level);
    setProgress(result.count);
    setTodoList(result.icategory);
    setTodoListOrigin(result.icategory);
  };

  const handleFinish = () => {
    const updatedTodoList = todoListOrigin?.filter(item => item.finish === 1);
    setTodoList(updatedTodoList);
  };

  const handleNotFinish = () => {
    const updatedTodoList = todoListOrigin?.filter(item => item.finish === 0);
    setTodoList(updatedTodoList);
  };

  const isAllCompleted = todoListOrigin?.every(item => item.finish === 0);

  const buttonClassName = isFixed
    ? "fixed bottom-10 left-[15%] z-40"
    : "absolute bottom-3 left-[6%] z-40";

  return (
    <>
      <Header />
      <div className="flex items-start justify-center w-full bg-gray-100">
        <div className="mt-5 mb-8 w-4/5 p-6 bg-white rounded-[8px] shadow relative min-w-[500px]">
          <div className="mb-8">
            <h1 className="text-center mb-5 w-full text-2xl font-semibold text-gray-400">
              도서 목록
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
              level={level}
              setLevel={setLevel}
              progress={progress}
            />
            <div className={buttonClassName}>
              <Link to="/add">
                <button className="w-16 h-16 text-3xl text-yellow-200 bg-slate-400 opacity-50 border rounded-full p-2">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </Link>
            </div>
          </div>
          <div>
            {isAllCompleted ? (
              todoList?.map(item => (
                <ListItem
                  key={item.itodo}
                  item={item}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  todoDataList={todoDataList}
                />
              ))
            ) : todoList?.length > 0 && todoListOrigin?.length > 0 ? (
              todoList?.map(item => (
                <ListItem
                  key={item.itodo}
                  item={item}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  todoDataList={todoDataList}
                />
              ))
            ) : (
              <div>
                <p className="text-center text-2xl mt-4">모든 할 일 완료됨</p>
                <p className="text-center text-xl mt-4">훌륭합니다!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
