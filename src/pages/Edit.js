import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteTodo, getEdit, patchEdit } from "../api/fetch";
import Header from "../components/Header";
import Modal from "../components/Modal";
import "../scss/edit.scss";

const Edit = () => {
  const [info, setInfo] = useState({});
  const [createdate, setCreateDate] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [company, setCompany] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [memo, setMemo] = useState("");
  const [bookmark, setBookmark] = useState("");
  const [finish, setFinish] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const editListData = async () => {
    const result = await getEdit(params.id);
    setInfo(result);
    setCreateDate(result.createdTodo);
    setTitle(result.title);
    setAuthor(result.writer);
    setCompany(result.publisher);
    setStart(result.start);
    setEnd(result.end);
    setMemo(result.memo);
    setBookmark(result.bookmark);
    setFinish(result.finish);
  };

  useEffect(() => {
    editListData();
  }, []);

  const handleDelete = _id => {
    if (params.id == _id) {
      deleteTodo(_id);
      alert("삭제됐습니다.");
      navigate("/todo");
      setModalOpen(false);
    }
  };

  const handleSave = async e => {
    e.preventDefault();
    const updatedTodo = {
      start: start,
      end: end,
      memo: memo,
      finish: finish,
      itodo: info.itodo,
    };
    setInfo(updatedTodo);
    await patchEdit(start, end, memo, finish, info.itodo);
    setIsEdit(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartChange = e => {
    setStart(e.target.value);
  };
  const handleEndChange = e => {
    setEnd(e.target.value);
  };
  const handleMemoChange = e => {
    setMemo(e.target.value);
  };
  const handleCompletedChange = e => {
    setFinish(e.target.value);
  };
  const handleBookmark = e => {
    setBookmark(e.target.value.replace(/[^0-9]/g, ""));
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
                value={createdate || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">책 제목 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={title || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">지은이 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={author || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">출판사 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={company || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">날짜 : </label>
              <div className="datewrap flex justify-between">
                <input
                  type="date"
                  className="w-1/4 px-3 py-2 ml-10 border rounded shadow text-center date"
                  name="start"
                  value={start || ""}
                  onChange={e => handleStartChange(e)}
                />
                <input
                  type="date"
                  className="w-1/4 px-3 py-2 ml-10 border rounded shadow text-center date"
                  name="end"
                  value={end || ""}
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
              <label className="w-[150px]">책갈피 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 border rounded shadow text-center"
                value={bookmark || ""}
                onChange={e => handleBookmark(e)}
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">완료 유무 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                name="finish"
                value={finish || ""}
                onChange={e => handleCompletedChange(e)}
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
                value={createdate || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">책 제목 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={title || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">지은이 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={author || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">출판사 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={company || ""}
                readOnly
              />
            </div>
            <div className="flex item-center justify-center text-center pb-5">
              <label className="w-[150px]">날짜 : </label>
              <div className="datewrap flex justify-between">
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 text-gray-500 bg-gray-200 border rounded shadow text-center date"
                  value={start || ""}
                  readOnly
                />
                <input
                  type="text"
                  className="w-1/4 px-3 py-2 text-gray-500 bg-gray-200 border rounded shadow text-center date"
                  value={end || ""}
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
              <label className="w-[150px]">책갈피 : </label>
              <input
                type="text"
                className="w-2/4 px-3 py-2 ml-10 text-gray-500 bg-gray-200 border rounded shadow text-center"
                value={bookmark || ""}
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
