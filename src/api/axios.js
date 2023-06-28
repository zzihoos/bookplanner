import axios from "axios";

// Todo Get 기능
const getTodo = async (setTodoData) => {
  try {
    const res = await axios.get("/tododata.json");
    const result = res.data;
    // 문자열로 정보가 넘어온 것을 불리언값으로 바꿔주는 작업
    const todoArr = result.map(item => {
      item.completed = JSON.parse(item.completed);
      item.id = JSON.parse(item.id);
      return item;
    });
    setTodoData(todoArr);
  } catch (error) {
    console.log(error);
  }
};

export { getTodo };
