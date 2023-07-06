import axios from "axios";

// 투두 페이지 get
export const getTodo = async () => {
  try {
    const res = await axios.get("/api/todo");
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
    return {
      level: 1,
      icategory: [
        {
          cate_name: "기술과학",
          itodo: 13,
          title: "Scenic Route, The",
          bookmark: 25,
          del: 0,
          finish: "미완료",
          start: "2023-10-01",
          end: "2023-10-05",
          color: "#53B0AB",
          isbn: "8278923705078",
        },
      ],
    };
  }
};

// 편집 페이지 get
export const getEdit = async _id => {
  try {
    const res = await axios.get(`/api/todo/${_id}`);
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
    return {
      itodo: 13,
      createdTodo: "2023-06-28",
      catename: "기술과학",
      title: "Scenic Route, The",
      writer: "Cureton",
      start: "2023-10-01",
      finish: "2023-10-05",
      memo: "nec euismod scelerisque",
      finishYn: "미완료",
    };
  }
};

// 베스트셀러 페이지 get
export const getBest = async () => {
  try {
    const res = await axios.get("/api/aladinbestseller");
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
    return {
      item: [
        {
          author: "김지훈 (지은이)",
          isbn: "K652833354",
          link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=319606702&partner=openAPI&start=api",
          description:
            "내가 얼마나 소중한 사람인지를 알게 해주는 책이다. 또 나의 예쁜 마음이 사실은 얼마나 고귀하고 아름다운 것인지를 알게 해주는 책이다. 여태 나의 아름다운 마음이 때로 보상심리가 되어 서운함과 억울함을, 미움을 가져다주기도 했다면 그 모든 마음을 단숨에 극복하게 해주는 책이다.",
          title: "참 예쁘고 선한 너라서 - 있는 그대로",
          pubDate: "2023-07-07",
          categoryName: "국내도서>에세이>한국에세이",
          fixedPrice: true,
          mallType: "BOOK",
          customerReviewRank: 0,
          cover:
            "https://image.aladin.co.kr/product/31960/67/coversum/k652833354_1.jpg",
          itemId: 319606702,
          subInfo: "",
          isbn13: 9791191877052,
          stockStatus: "",
          publisher: "진심의꽃한송이",
          priceSales: 17820,
          salesPoint: 0,
          adult: false,
          categoryId: 51371,
          priceStandard: 19800,
          mileage: 990,
        },
      ],
    };
  }
};

// 에딧 페이지 patch
export const patchEdit = async (startDay, endDay, memo, finish, itodo) => {
  try {
    const res = await axios.patch(`/api/todo/${itodo}`, {
      start: startDay,
      end: endDay,
      memo: memo,
      finish: finish,
      itodo: itodo,
    });
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 투두 Delete
export const deleteTodo = async _id => {
  try {
    const res = await axios.delete(`/api/todo/${_id}`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
