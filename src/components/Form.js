import React, { useState } from "react";

const Form = ({ todoData, setTodoData }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value === "") {
      alert("내용을 입력하세요.");
    }

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData(prev => {
      return [...prev, newTodo];
    });

    localStorage.setItem("fbTodoData", JSON.stringify([...todoData, newTodo]));

    setValue("");
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          style={{ flex: "10", padding: "5px" }}
          placeholder="할일을 입력해주세요."
          value={value}
          onChange={handleChange}
        />

        <input type="submit" style={{ flex: "1" }} value="입력" />
      </form>
    </div>
  );
};

export default Form;
