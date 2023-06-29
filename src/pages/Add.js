import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router";

const Add = () => {


  const [cate, setCate] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [company, setCompany] = useState("");
  const [memo, setMemo] = useState("");
  const [bookmark, setBookmark] = useState("");
  const [finish, setFinish] = useState("");
  const [searchResults, setSearchResults] = useState([]);



  // const navigate = useNavigate();

  if (new Date(endDay) < new Date(startDay)) {
    alert("날짜를 다시 입력해 주세요")
    setEndDay("");
   
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/adddata.json");
      const data = res.data;
      const transformedData = transformData(data);
      setSearchResults(transformedData);
    } catch (error) {
      console.log(error);
    }
  };

  const transformData = data => {
    return data.map(item => ({
      title: item.title,
      cate: item.cate,
      author: item.author,
      company: item.company,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Handle the form submission, such as making an API call or performing any desired actions
    // You can access the values using the state variables: cate, startDay, endDay, title, author, company, memo
    console.log({ cate, startDay, endDay, title, author, company, memo });

    // Reset the form after submission
    setCate("");
    setStartDay("");
    setEndDay("");
    setTitle("");
    setAuthor("");
    setCompany("");
    setMemo("");
    setBookmark("");
    setFinish("");
  };

  const handleTitleChange = event => {
    const newTitle = event.target.value;
    setTitle(newTitle);

    if (newTitle === "") {
      setCate("");
      setAuthor("");
      setCompany("");
    }
  };

  const handleTitleSelect = inputTitle => {
    const selectBook = searchResults.find(book => book.title === inputTitle);
    if (selectBook) {
      setTitle(selectBook.title);
      setCate(selectBook.cate);
      setCompany(selectBook.company);
      setAuthor(selectBook.author);
    }
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded">
        <form
          onSubmit={handleSubmit}
          className="w-3/5 border bg-white mt-5 rounded"
        >
          <h2 className="py-10 font-bold text-2xl text-center">일정 입력</h2>
          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">카테고리:</label>
            <input
              id="category"
              type="text"
              value={cate}
              onChange={e => setCate(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">시작일:</label>
            <input
              id="startDay"
              type="date"
              value={startDay}
              onChange={e => setStartDay(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">종료일:</label>
            <input
              id="endDay"
              type="date"
              value={endDay}
              onChange={e => setEndDay(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">책제목:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          {title !== "" && searchResults.length > 0 && (
            <div className="flex item-center justify-center text-center">
              <ul className="block mb-1 w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow">
                {searchResults.map(book => (
                  <li
                    key={book.title}
                    onClick={() => handleTitleSelect(book.title)}
                    className="cursor-pointer text-blue-500"
                  >
                    {book.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">지은이:</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">출판사:</label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
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

          {/* bookmark */}
          <div>
            <input
              id="bookmark"
              type="hidden"
              value={bookmark}
              onChange={e => setBookmark(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>

          {/* finish */}
          <div>
            <input
              id="finish"
              type="hidden"
              value={finish}
              onChange={e => setFinish(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
