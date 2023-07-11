import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookProgressBar } from "./ProgreesBar";

const ListItem = ({ item, todoList, setTodoList, todoDataList }) => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsShown(true);
  }, []);

  const handleCompleteChange = async _itodo => {
    try {
      const updatedTodoList = todoList.map(todoItem => {
        if (todoItem.itodo === _itodo) {
          return {
            ...todoItem,
            finish: todoItem.finish === 0 ? 1 : 0,
          };
        }
        return todoItem;
      });

      await axios.patch("/api/todo", {
        itodo: _itodo,
        finish: updatedTodoList.find(todoItem => todoItem.itodo === _itodo)
          .finish,
      });

      setTodoList(updatedTodoList);
      await todoDataList();
    } catch (error) {
      console.error("데이터 전송에 실패했습니다.", error);
    }
  };

  const handleNavigate = () => {
    navigate(`/edit/${item.itodo}`);
  };

  const getDDay = item => {
    const setDate = new Date(item.end);
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const dDay = day >= 0 ? day : 0;
    return (
      <p className="relative z-10 text-sm pb-1 font-sans m-auto pr-7">
        목표일까지
        <span className="text-[#FFFFFF] text-lg font-semibold">{` ${dDay}일 `}</span>
        남았습니다.
      </p>
    );
  };

  return (
    <>
      <div
        className={`relative p-3 w-[70%] m-auto ${isShown ? "shown" : ""}`}
        title="누르면 해당 상세페이지로 이동합니다"
      >
        <input
          className={`ml-3 absolute top-8 w-8 h-6 z-30 transition-all duration-300 ${
            isShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          type="checkbox"
          defaultChecked={item.finish === 1}
          onChange={() => handleCompleteChange(item.itodo)}
        />
        <div
          className={`w-[100%] h-16 flex text-center text-xl rounded cursor-pointer relative overflow-hidden transition-all duration-300 ${
            isShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ background: `${item.color}` }}
          onClick={handleNavigate}
        >
          <span className="z-20 w-[70%] m-auto relative line-clamp-1 text-lg pt-1 font-sans font-semibold pl-14 text-[#322E25]">
            {item.title}
          </span>

          {getDDay(item)}
          <BookProgressBar item={item} />
        </div>
      </div>
    </>
  );
};

export default ListItem;
