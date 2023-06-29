import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item, todoData, setTodoData }) => {
  const navigate = useNavigate();
  const handleCompleteChange = _id => {
    let newTodoData = todoData.map(item => {
      if (item.id === _id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
  };
  const handleNavigate = () => {
    navigate(`/edit/${item.id}`, { state: { ...todoData } });
  };
  return (
    <>
      <div
        className={`relative p-3 ${item.completed ? "line-through" : "none"}`}
      >
        <input
          className="ml-10 absolute top-7 w-5 h-5"
          type="checkbox"
          defaultChecked={item.completed}
          onChange={() => handleCompleteChange(item.id)}
        />
        <div
          className="text-center text-xl bg-neutral-400 rounded cursor-pointer"
          onClick={handleNavigate}
        >
          <span>{item.title}</span>
          <p>d-day</p>
        </div>
      </div>
    </>
  );
};

export default ListItem;
