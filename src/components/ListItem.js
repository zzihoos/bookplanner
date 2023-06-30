import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item, todoData, setTodoData }) => {
  const navigate = useNavigate();
  const handleCompleteChange = _itodo => {
    let newTodoData = todoData.icategory?.map(item => {
      if (item.itodo === _itodo) {
        return { ...item, del: item.del === 0 ? 1 : 0 };
      }
      return item;
    });
    setTodoData({ ...todoData, icategory: newTodoData });
  };
  const handleNavigate = () => {
    navigate(`/edit/${item.itodo}`);
  };
  
  return (
    <>
      <div className={`relative p-3 ${item.del ? "line-through" : "none"}`}>
        <input
          className="ml-10 absolute top-5 w-10 h-10"
          type="checkbox"
          defaultChecked={item.del === 1}
          onChange={() => handleCompleteChange(item.itodo)}
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
