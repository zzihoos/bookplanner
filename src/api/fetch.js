import axios from "axios";

// Todo Get 기능
const getTodo = async setTodoData => {
  try {
    const res = await axios.get("/api/todo");
    const result = res.data;
    setTodoData(result);
  } catch (error) {
    console.log(error);
  }
};

// Todo Delete 기능
const deleteTodo = async _id => {
  try {
    const res = await axios.delete(`/todo/${_id}`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { getTodo, deleteTodo };
