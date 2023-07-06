import React, { useEffect, useRef, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Header from "../components/Header";
import "../scss/add.scss";

const Add = () => {
  const [cate, setCate] = useState();
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
  const [total, setTotal] = useState("");
  const [debouncedTitle, setDebouncedTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(true);
  const searchResultsRef = useRef(null);
  const [nowDate, setNowDate] = useState(new Date());

  useEffect(() => {
    setNowDate(new Date());
  }, []);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    const delay = 500; // 디바운싱 대기 시간 (밀리초)

    const timeoutId = setTimeout(() => {
      setDebouncedTitle(title); // 입력된 title 값을 debouncedTitle로 업데이트
    }, delay);

    return () => {
      clearTimeout(timeoutId); // 이전 타임아웃 제거
    };
  }, [title]); // title 값이 변경될 때마다 타임아웃 재설정

  useEffect(() => {
    fetchData();
  }, [debouncedTitle]);

  const fetchData = async () => {
    // console.log(debouncedTitle);
    try {
      const res = await axios.get(`/api/plan/search?str=${debouncedTitle}`);
      const data = res.data;
      // console.log(data);
      const transformedData = transformData(data);
      console.log(transformedData);
      setSearchResults(transformedData);
    } catch (error) {
      console.log(error);
    }
  };
  //
  const transformData = data => {
    return data.map(item => ({
      title: item.title,
      cate: item.cate,
      author: item.author,
      company: item.company,
      total: item.page,
      isbn: item.isbn,
    }));
  };

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

    setShowSearchResults(true);
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
  };

  const handleTitleChange = event => {
    const newTitle = event.target.value;
    setTitle(newTitle);

    if (newTitle === "") {
      setCate();
      setAuthor("");
      setCompany("");
      setBookmark(0);
      setFinish(0);
      setDel(0);
      setShowSearchResults(true);
      setSearchResults([]);
    }
  };

  const handleTitleSelect = inputTitle => {
    const selectBook = searchResults.find(book => book.title === inputTitle);
    if (selectBook) {
      setTitle(selectBook.title);
      setCate(selectBook.cate);
      setCompany(selectBook.company);
      setAuthor(selectBook.author);
      setBookmark(selectBook.bookmark || 0);
      setFinish(selectBook.finish || 0);
      setDel(selectBook.del || 0);
      setIsbn(selectBook.isbn);
      setTotal(selectBook.total);
    }
    setShowSearchResults(false);
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
          {/* <div>
            
            <input
              id="category"
              type="hidden"
              value={cate}
              onChange={e => setCate(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div> */}

          <div className="flex items-center justify-center text-center py-5">
            <label className="block mb-1">시작일:</label>
            <input
              id="start"
              type="date"
              value={nowDate.toISOString().split('T')[0]}
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
              onChange={handleTitleChange}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-[65.5%]"
            />
          </div>

          {title !== "" && searchResults.length > 0 && showSearchResults && (
            <div className="absolute h-64 w-[62%] pl-[45px] flex justify-center text-center -translate-y-5">
              <ul
                ref={searchResultsRef}
                className="block mb-1 w-[55%] text-gray-500 border rounded shadow overflow-auto"
              >
                {searchResults.map((book, isbn) => (
                  <li
                    key={book.title + isbn}
                    onClick={() => handleTitleSelect(book.title)}
                    className="border-2 bg-white cursor-pointer text-black py-3 searchli"
                  >
                    <div>
                      제목: {book.title} <br />
                      출판사: {book.company}
                    </div>
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

          {/* finish */}
          <div>
            <input
              id="del"
              type="hidden"
              value={del}
              onChange={e => setDel(e.target.value)}
              className="w-2/4 px-3 py-2 ml-10 text-gray-500 border rounded shadow"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
