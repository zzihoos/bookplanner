import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BookProgressBar } from "./ProgreesBar";

const ListItem = ({ item, todoList, setTodoList }) => {
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
      console.log("데이터 전송 실행");
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

      <p className="relative z-10 text-sm pb-1 font-sans m-auto pr-7">
        목표일까지 <span className="text-[#FFFFFF] text-lg font-semibold">{`${day}일`}</span> 남았습니다.
      </p>

    );
  };

  return (
    <>

      <div className="relative p-3 w-[70%] m-auto">
        <input
          className="ml-3 absolute top-8 w-8 h-6 z-30"
          type="checkbox"
          defaultChecked={item.finish === 1}
          onChange={() => handleCompleteChange(item.itodo)}
        />
        <div
          className={`w-[100%] h-16 flex text-center text-xl rounded cursor-pointer relative overflow-hidden`}
          style={{ background: `${item.color}` }}
          onClick={handleNavigate}
        >
          
          <span className="z-20 w-[70%] m-auto relative line-clamp-1 text-lg pt-1 font-sans font-semibold pl-14 text-[#322E25q]">
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
