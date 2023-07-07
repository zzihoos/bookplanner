import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BookProgressBar } from "./ProgreesBar";

const ListItem = ({ item, todoList, setTodoList, todoDataList }) => {
  const navigate = useNavigate();

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

      const filteredTodoList = updatedTodoList.filter(
        todoItem => todoItem.itodo !== _itodo,
      );

      const updatedTodo = updatedTodoList.find(
        todoItem => todoItem.itodo === _itodo,
      );

      await axios.patch("/api/todo", {
        itodo: _itodo,
        finish: updatedTodo.finish,
      });

      setTodoList(filteredTodoList);
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
    return (
      <p className="relative z-10">
        <span className="text-white">{`${day}일`}</span> 남았습니다.
      </p>
    );
  };

  return (
    <>
      <div
        className="relative p-3 w-4/5 m-auto"
        title="누르면 상세정보를 볼 수 있습니다"
      >
        <input
          className="ml-9 absolute top-7 w-8 h-8 z-30"
          type="checkbox"
          defaultChecked={item.finish === 1}
          onChange={() => handleCompleteChange(item.itodo)}
        />
        <div
          className={`text-center text-xl rounded cursor-pointer relative overflow-hidden`}
          style={{ background: `${item.color}` }}
          onClick={handleNavigate}
        >
          <span className="z-20 w-[90%] m-auto relative line-clamp-1">
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
