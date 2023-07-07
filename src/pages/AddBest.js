import React, { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useLocation } from "react-router";
import Header from "../components/Header";

const AddBest = () => {
  const [cate, setCate] = useState(11);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [company, setCompany] = useState("");
  const [memo, setMemo] = useState("");
  const [bookmark, setBookmark] = useState(0);
  const [finish, setFinish] = useState(0);
  const [del, setDel] = useState(0);
  const [isbn, setIsbn] = useState("");
  const [total, setTotal] = useState(null);

  // 출판사데이터, 카테고리 문제 상의
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (location.state) {
      const { title, author, company, isbn } = location.state;
      setTitle(prevTitle => title || prevTitle);
      setAuthor(prevAuthor => author || prevAuthor);
      setCompany(prevCompany => company || prevCompany);
      setIsbn(prevCompany => isbn || prevCompany);
    }
  }, [state]);

  if (new Date(end) < new Date(start)) {
    alert("날짜를 다시 입력해 주세요");
    setEnd("");
  }

  const handleSubmit = async event => {
    event.preventDefault();
    console.log({
      cate,
      start,
      end,
      title,
      author,
      company,
      memo,
      bookmark,
      finish,
      del,
      isbn,
      total,
    });

    const formData = {
      cate,
      start,
      end,
      title,
      author,
      company,
      memo,
      bookmark,
      finish,
      del,
      isbn,
      total,
    };

    try {
      const res = await axios.post("/api/plan/Todolist", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    setCate();
    setStart("");
    setEnd("");
    setTitle("");
    setAuthor("");
    setCompany("");
    setMemo("");
    setBookmark("");
    setFinish("");
    setDel("");
    setTotal();
  };

  if (new Date(end) < new Date(start)) {
    alert("날짜를 다시 입력해 주세요");
    setEnd("");
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full mb-2 px-4 text-gray-600 bg-gray-100 border rounded">
        <form
          onSubmit={handleSubmit}
          className="w-3/5 border bg-white my-5 rounded-[8px]"
        >
          <h2 className="py-10 font-bold text-2xl text-center">일정 입력</h2>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">시작일:</label>
            <input
              id="start"
              type="date"
              value={start}
              onChange={e => setStart(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">종료일:</label>
            <input
              id="end"
              type="date"
              value={end}
              onChange={e => setEnd(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">책제목:</label>

            <input
              id="title"
              type="text"
              value={title}
              readOnly
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-[65.5%]"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">지은이:</label>
            <input
              id="author"
              type="text"
              value={author}
              readOnly
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">출판사:</label>
            <input
              id="company"
              type="text"
              value={company}
              readOnly
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">메모:</label>
            <textarea
              id="memo"
              value={memo}
              onChange={e => setMemo(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="h-10 w-20 px-4 my-4 bg-blue-500 text-white rounded hover:bg-blue-600 item-center"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBest;
