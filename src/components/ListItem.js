import React from "react";
import { useNavigate } from "react-router-dom";
import { BookProgressBar } from "./ProgreesBar";

const ListItem = ({ item, todoList, setTodoData }) => {
  const navigate = useNavigate();

  const handleCompleteChange = _itodo => {
    let newTodoData = todoList.map(item => {
      if (item.itodo === _itodo) {
        return { ...item, del: item.del === 0 ? 1 : 0 };
      }
      return item;
    });
    setTodoData(newTodoData);
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
        <span className="text-red-[#ff4545]">{`${day}일`}</span> 남았습니다.
      </p>
    );
  };

  return (
    <>
      <div
        className={`relative p-3 w-4/5 m-auto ${item.del ? "hidden" : "block"}`}
      >
        <input
          className="ml-9 absolute top-7 w-8 h-8 z-30"
          type="checkbox"
          defaultChecked={item.del === 1}
          onChange={() => handleCompleteChange(item.itodo)}
        />
        <div
          className={`text-center text-xl rounded cursor-pointer relative overflow-hidden`}
          style={{ background: `${item.color}` }}
          onClick={handleNavigate}
        >
          <span className="z-20 relative">{item.title}</span>
          {getDDay(item)}
          <BookProgressBar item={item} />
        </div>
      </div>
    </>
  );
};

export default ListItem;
