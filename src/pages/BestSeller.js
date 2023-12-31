import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getBest } from "../api/fetch";
import Header from "../components/Header";
import "../scss/bestseller.scss";

const BestSeller = () => {
  const [bookData, setBookData] = useState([]);
  const navigate = useNavigate();

  const bookListData = async () => {
    const result = await getBest();
    setBookData(result);
  };
console.log(bookData)
  useEffect(() => {
    bookListData();
  }, []);

  const handleBestAdd = item => {
    navigate("/addbest", {
      state: {
        title: item.title,
        author: item.author,
        company: item.publisher,
        isbn: item.isbn13,
      },
    });
  };

  return (
    <div className="bg-gray-100 pb-7">
      <Header />
      <div className="flex flex-col justify-center w-4/5 bg-white py-5 m-auto border rounded-[8px] mt-5">
        <h2 className="text-2xl text-center pt-10 text-gray-400 font-semibold">
          베스트 셀러 추천
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 px-5 w-full grid-controler">
          {bookData?.map((item, index) => {
            return (
              <div
                className="p-5 flex items-center w-full h-96 hover:bg-slate-200 rounded cursor-pointer info"
                key={index}
                onClick={() => handleBestAdd(item)}
                title="해당 정보를 누르면 책 등록페이지로 이동합니다"
              >
                <div className="w-2/4 h-64 imgbox">
                  <img src={item.cover} alt="" className="w-full h-full" />
                </div>
                <ul className="flex flex-col p-5 justify-center items-center">
                  <li className="py-2 text-xl font-bold line-clamp-1 leading-10">
                    {item.title}
                  </li>
                  <li className="py-2 text-[#626262] line-clamp-1 leading-8">
                    {item.categoryName}
                  </li>
                  <li className="py-2 text-[#626262]">
                    {item.author} / {item.publisher} / {item.pubDate}
                  </li>
                  <li className="py-2 text-[#626262] line-clamp-3 leading-8">
                    {item.description || ""}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
