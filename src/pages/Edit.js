import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "../components/Header";

const Edit = () => {
  const [info, setInfo] = useState([]);
  const [newData, setNewData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");
  const [finish, setFinish] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // pk : primary key (unique number )
    // pk 를 axios.get (params.id) 상세호출 한다고 가정하고 작업
    const detailData = async () => {
      try {
        const res = await axios.get("/tododata.json");
        const result = res.data;
        setInfo(result);
        const newData = result.find(item => item.id == params.id);
        setNewData(newData);
        setDate(`${newData.startDay} ~ ${newData.endDay}`);
        setMemo(newData.memo);
        setFinish(newData.completed);
      } catch (error) {
        console.log(error);
      }
    };
    detailData();
  }, []);

  const handleDateChange = e => {
    setDate(e.target.value);
  };
  const handleMemoChange = e => {
    setMemo(e.target.value);
  };
  const handleCompletedChange = e => {
    setFinish(e.target.value);
  };

  const handleDelete = _id => {
    const newTodoData = info.filter(item => item.id !== _id);
    setInfo(newTodoData);
    navigate("/todo");
    console.log(info);
  };

  const handleSave = _id => {
    const saveTodoData = info.map(item => {
      if (item.id === _id) {
        item.date = date;
        item.memo = memo;
        item.completed = finish;
      }
      return item;
    });
    setInfo(saveTodoData);
    setIsEdit(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  // const newData = info.find(item => item.id == params.id);
  // if (
  //   newData &&
  //   (date !== `${newData.startDay} ~ ${newData.endDay}` ||
  //     memo !== newData.memo ||
  //     finish !== newData.completed)
  // ) {
  //   setDate(`${newData?.startDay} ~ ${newData?.endDay}`);
  //   setMemo(newData?.memo);
  //   setFinish(newData?.completed);
  // }

  if (isEdit) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded">
          <form className="w-4/5 border bg-white mt-5 rounded">
            <div className="flex item-center justify-center text-center py-5">
              <label className="w-[200px]">도서 카테고리 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={newData?.category || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">책 제목 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={newData?.title || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">지은이 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={newData?.author || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">출판사 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={newData?.company || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">날짜 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
                value={date}
                onChange={e => handleDateChange(e)}
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">메모 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
                value={memo}
                onChange={e => handleMemoChange(e)}
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">완료 유무 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
                value={finish}
                onChange={e => handleCompletedChange(e)}
              />
            </div>
          </form>
          <div className="flex justify-center gap-10 p-7">
            <button
              className="px-8 py-3 bg-green-400 text-white rounded-md"
              onClick={() => handleSave()}
            >
              저장
            </button>
            <button
              className="ml-14 px-8 py-3 bg-red-500 text-white rounded-md"
              onClick={() => setIsEdit(false)}
            >
              취소
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded">
          <form className="w-4/5 border bg-white mt-5 rounded">
            <div className="flex item-center justify-center text-center py-5">
              <label className="w-[200px]">도서 카테고리 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={newData?.category || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">책 제목 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={newData?.title || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">지은이 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={newData?.author || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">출판사 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={newData?.company || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">날짜 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={date}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">메모 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={memo}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">완료 유무 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow"
                value={finish}
                readOnly
              />
            </div>
          </form>
          <div className="flex justify-center gap-10 p-7">
            <button
              className="px-8 py-3 bg-green-400 text-white rounded-md"
              onClick={() => setIsEdit(true)}
            >
              수정
            </button>
            <button
              className="ml-14 px-8 py-3 bg-red-500 text-white rounded-md"
              onClick={() => handleDelete(info.id)}
            >
              삭제
            </button>
            <button
              className="ml-14 px-8 py-3 bg-black text-white rounded-md"
              onClick={handleBack}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Edit;
