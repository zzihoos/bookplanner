import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, todoData, setTodoData }) => {
  // console.log("ListItem 랜더링", item);

  // 편집 상태 타이틀 설정 state
  const [editTitle, setEditTitle] = useState(item.title);

  useEffect(() => {
    // setEditTitle(item.title);
  }, []);

  const getStyle = _completed => {
    return {
      padding: "10px",
      textDecoration: _completed ? "line-through" : "none",
    };
  };

  const handleCompleteChange = _id => {
    let newTodoData = todoData.map(item => {
      if (item.id === _id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      <div className="relative" style={getStyle(item.completed)}>
        {/* defaultChecked : 체크박스에 기본체크 상태 설정 */}
        <input
          className="ml-10 absolute top-7 w-5 h-5"
          type="checkbox"
          defaultChecked={item.completed}
          onChange={() => handleCompleteChange(item.id)}
        />
        <Link
          to="/edit"
          todoData={todoData}
          setTodoData={setTodoData}
          item={item}
        >
          <div className="text-center text-xl bg-neutral-400 rounded cursor-pointer">
            <span>{item.title}</span>
            <p>d-day</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
