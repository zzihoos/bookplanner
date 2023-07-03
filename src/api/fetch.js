import axios from "axios";

// Todo 페이지
const getTodo = async () => {
  try {
    const res = await axios.get("/api/todo");
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 편집 페이지
const getEdit = async (_id) => {
  try {
    const res = await axios.get(`/api/todo/${_id}`);
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 베스트셀러 페이지
const getBest = async () => {
  try {
    const res = await axios.get("/api/aladinbestseller");
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Todo Delete 기능
const deleteTodo = async _id => {
  try {
    const res = await axios.delete(`/api/todo/${_id}`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { deleteTodo, getTodo, getBest, getEdit };
