import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteTodo, getEdit } from "../api/fetch";
import Header from "../components/Header";
import "../scss/edit.scss";

const Edit = () => {
  const [info, setInfo] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [memo, setMemo] = useState("");
  const [finish, setFinish] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  // const dummy = {
  //   itodo: 13,
  //   createdTodo: "2023-06-28",
  //   catename: "기술과학",
  //   title: "Scenic Route, The",
  //   writer: "Cureton",
  //   start: "2023-10-01",
  //   finish: "2023-10-05",
  //   memo: "nec euismod scelerisque",
  //   finishYn: "미완료",
  // };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEdit(params.id);
      setInfo(result);
      setStartDay(result.start);
      setEndDay(result.finish);
      setMemo(result.memo);
      setFinish(result.finishYn);
    };
    fetchData();
  }, [params.id]);

  const handleDelete = _id => {
    // 모달창으로 교체
    alert("진짜 삭제하시겠습니까?");
    deleteTodo(_id);
    navigate("/todo");
  };

  const handleSave = e => {
    if (e.target.name === "start") {
      setStartDay(e.target.value);
    } else if (e.target.name === "end") {
      setEndDay(e.target.value);
    } else if (e.target.name === "memo") {
      setMemo(e.target.value);
    } else if (e.target.name === "finish") {
      setFinish(e.target.value);
    }
    setIsEdit(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartChange = e => {
    setStartDay(e.target.value);
  };
  const handleEndChange = e => {
    setEndDay(e.target.value);
  };
  const handleMemoChange = e => {
    setMemo(e.target.value);
  };
  const handleCompletedChange = e => {
    setFinish(e.target.value);
  };

  if (isEdit) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded">
          <form className="w-4/5 border bg-white mt-5 rounded">
            <div className="flex item-center justify-center text-center py-5">
              <label className="w-[200px]">작성 날짜 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.createdTodo}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">도서 카테고리 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.catename}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">책 제목 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.title}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">지은이 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.writer}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">출판사 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={"출판사내놔"}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">날짜 : </label>
              <div className="datewrap">
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 ml-10 border rounded shadow text-center date"
                  name="start"
                  value={startDay}
                  onChange={e => handleStartChange(e)}
                />
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 ml-10 border rounded shadow text-center date"
                  name="end"
                  value={endDay}
                  onChange={e => handleEndChange(e)}
                />
              </div>
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">메모 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow text-center"
                name="memo"
                defaultValue={memo}
                onChange={e => handleMemoChange(e)}
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">완료 유무 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow text-center"
                name="finish"
                defaultValue={finish}
                onChange={e => handleCompletedChange(e)}
              />
            </div>
          </form>
          <div className="flex justify-center gap-10 p-7">
            <button
              className="px-8 py-3 bg-green-400 text-white rounded-md"
              onClick={e => handleSave(e)}
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
              <label className="w-[200px]">작성 날짜 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.createdTodo}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">도서 카테고리 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.catename}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">책 제목 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.title}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">지은이 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.writer}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">출판사 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={"출판사내놔"}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">날짜 : </label>
              <div className="datewrap flex justify-between">
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 text-gray-500 bg-gray-200 border rounded shadow text-center date"
                  value={startDay}
                  readOnly
                />
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 text-gray-500 bg-gray-200 border rounded shadow text-center date"
                  value={endDay}
                  readOnly
                />
              </div>
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">메모 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={memo}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[200px]">완료 유무 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
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
              onClick={() => handleDelete(info.itodo)}
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
