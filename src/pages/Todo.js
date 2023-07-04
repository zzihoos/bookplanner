import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodo } from "../api/fetch";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import { ExpProgressBar } from "../components/ProgreesBar";

const Todo = () => {
  const [todoData, setTodoData] = useState({});
  const [level, setLevel] = useState(0);
  const [completeList, setCompleteList] = useState([]);
  const [inCompleteList, setInCompleteList] = useState([]);

  useEffect(() => {
    todoDataList();
  }, []);

  const todoDataList = async () => {
    const result = await getTodo();
    setTodoData(result);
    setLevel(result.level);
  };

  const handleTotal = () => {};

  const handleFinish = () => {
    // const updatedIcategory = todoData.icategory?.filter(item => {
    //   if (item.del === 1) {
    //     document.querySelectorAll(".hidden").forEach(item => {
    //       item.classList.replace("hidden", "block");
    //     });
    //     return item;
    //   }
    // });
    // setTodoData(prevTodoData => ({
    //   ...prevTodoData,
    //   icategory: updatedIcategory,
    // }));
    // const updatedTodoList = todoList.map(item => {
    //   if (item.del === 1) {
    //     return {
    //       ...item,
    //       hidden: false
    //     };
    //   } else {
    //     return item;
    //   }
    // });
    // setCompleteList(updatedTodoList);
    // return completeList;
  };

  const handleNotFinish = () => {
    // const filteredIcategory = todoData.icategory?.filter(
    //   item => item.del === 0,
    // );
    // setTodoData(prevTodoData => ({
    //   ...prevTodoData,
    //   icategory: filteredIcategory,
    // }));
    // const updatedTodoList = todoList.map(item => {
    //   if (item.del === 0) {
    //     return {
    //       ...item,
    //       hidden: false
    //     };
    //   } else {
    //     return {
    //       ...item,
    //       hidden: true
    //     };
    //   }
    // });
    // setInCompleteList(updatedTodoList);
    // return inCompleteList
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
                <button onClick={handleTotal}>전체</button>
              </li>
              <li>
                <button onClick={handleFinish}>완료</button>
              </li>
              <li>
                <button onClick={handleNotFinish}>미완료</button>
              </li>
              <li>
                <button>더보기</button>
              </li>
            </ul>
            <ExpProgressBar
              todoData={todoData}
              level={level}
              setLevel={setLevel}
            />
            <div className="fixed bottom-0 left-30 z-40">
              <Link to="/add">
                <button className="w-16 h-16 text-3xl text-yellow-200 bg-slate-400 opacity-50 border rounded-full p-2">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </Link>
            </div>
          </div>
          <div>
            {todoData.icategory?.map(item => (
              <ListItem
                key={item.itodo}
                item={item}
                todoData={todoData}
                setTodoData={setTodoData}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
