import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteTodo, getEdit, postEdit } from "../api/fetch";
import Header from "../components/Header";
import Modal from "../components/Modal";
import "../scss/edit.scss";

const Edit = () => {
  const [info, setInfo] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [memo, setMemo] = useState("");
  const [finish, setFinish] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const editListData = async () => {
    const result = await getEdit(params.id);
    setInfo(result);
    setStartDay(result.start);
    setEndDay(result.end);
    setMemo(result.memo);
    setFinish(result.finish);
  };

  useEffect(() => {
    editListData();
  }, []);

  const handleDelete = _id => {
    // 403에러, 수정하고 삭제할 시 안되는 문제 해결해야함
    if (params.id == _id) {
      deleteTodo(_id);
      navigate("/todo");
      console.log("삭제");
      setModalOpen(false);
    }
  };

  const handleSave = e => {
    e.preventDefault();

    if (e.target.name === "start") {
      setStartDay(e.target.value);
    } else if (e.target.name === "end") {
      setEndDay(e.target.value);
    } else if (e.target.name === "memo") {
      setMemo(e.target.value);
    } else if (e.target.name === "finish") {
      setFinish(e.target.value);
    }

    const updatedTodo = {
      start: startDay,
      end: endDay,
      memo: memo,
      finish: finish,
    };
    setInfo(updatedTodo);
    // 403에러 해결해야함
    postEdit(startDay, endDay, memo, finish, info.itodo);
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
          <form className="w-3/5 border bg-white mt-5 rounded-[8px]">
            <div className="flex item-center justify-center text-center py-5">
              <label className="w-[150px]">작성 날짜 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.createdTodo || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">도서 카테고리 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.catename || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">책 제목 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.title || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">지은이 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.writer || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">출판사 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={"출판사내놔" || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">날짜 : </label>
              <div className="datewrap">
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 ml-10 border rounded shadow text-center date"
                  name="start"
                  value={startDay || ""}
                  onChange={e => handleStartChange(e)}
                />
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 ml-10 border rounded shadow text-center date"
                  name="end"
                  value={endDay || ""}
                  onChange={e => handleEndChange(e)}
                />
              </div>
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">메모 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow text-center"
                name="memo"
                value={memo || ""}
                onChange={e => handleMemoChange(e)}
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">완료 유무 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow text-center"
                name="finish"
                value={finish || ""}
                onChange={e => handleCompletedChange(e)}
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <input
                type="hidden"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.itodo || ""}
                readOnly
              />
            </div>
          </form>
          <div className="flex justify-center gap-10 p-7">
            <button
              type="submit"
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
          <form className="w-3/5 border bg-white mt-5 rounded-[8px]">
            <div className="flex item-center justify-center text-center py-5">
              <label className="w-[150px]">작성 날짜 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.createdTodo || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">도서 카테고리 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.catename || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">책 제목 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.title || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">지은이 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.writer || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">출판사 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={"출판사내놔" || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">날짜 : </label>
              <div className="datewrap flex justify-between">
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 text-gray-500 bg-gray-200 border rounded shadow text-center date"
                  value={startDay || ""}
                  readOnly
                />
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 text-gray-500 bg-gray-200 border rounded shadow text-center date"
                  value={endDay || ""}
                  readOnly
                />
              </div>
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">메모 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={memo || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">완료 유무 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={finish || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <input
                type="hidden"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={info.itodo || ""}
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
            <div>
              <button
                className="ml-14 px-8 py-3 bg-red-500 text-white rounded-md"
                onClick={() => setModalOpen(true)}
              >
                삭제
              </button>
              {isModalOpen && (
                <Modal
                  onClose={() => setModalOpen(false)}
                  handleDelete={handleDelete}
                  info={info}
                ></Modal>
              )}
            </div>
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
