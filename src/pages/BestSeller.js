import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";

const BestSeller = () => {
  const [bookData, setBookData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  // const data = {
  //   object: {
  //     item: [
  //       {
  //         author: "김지훈 (지은이)",
  //         isbn: "K652833354",
  //         link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=319606702&partner=openAPI&start=api",
  //         description:
  //           "내가 얼마나 소중한 사람인지를 알게 해주는 책이다. 또 나의 예쁜 마음이 사실은 얼마나 고귀하고 아름다운 것인지를 알게 해주는 책이다. 여태 나의 아름다운 마음이 때로 보상심리가 되어 서운함과 억울함을, 미움을 가져다주기도 했다면 그 모든 마음을 단숨에 극복하게 해주는 책이다.",
  //         title: "참 예쁘고 선한 너라서 - 있는 그대로",
  //         pubDate: "2023-07-07",
  //         categoryName: "국내도서>에세이>한국에세이",
  //         fixedPrice: true,
  //         mallType: "BOOK",
  //         customerReviewRank: 0,
  //         cover:
  //           "https://image.aladin.co.kr/product/31960/67/coversum/k652833354_1.jpg",
  //         itemId: 319606702,
  //         subInfo: "",
  //         isbn13: 9791191877052,
  //         stockStatus: "",
  //         publisher: "진심의꽃한송이",
  //         priceSales: 17820,
  //         salesPoint: 0,
  //         adult: false,
  //         categoryId: 51371,
  //         priceStandard: 19800,
  //         mileage: 990,
  //       },
  //       {
  //         author: "아사히출판 편집부 (지은이), 방현희 (옮긴이)",
  //         isbn: "K512833354",
  //         link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=319606356&partner=openAPI&start=api",
  //         description:
  //           "시원한 여름 실 플랙스로 완성도 높은 의류를 뜰 수 있도록 다양한 디자인을 제안하고 있다. 옷은 물론 숄, 모자, 파우치 등의 소품도 함께 들어 있다. 이 책의 모든 작품은 청량하고 하늘하늘한 실 플랙스로 떴다. 플랙스는 마와 면으로 뜬 여름용 뜨개실이다.",
  //         title: "봄여름의 뜨개 - 산뜻하고 시원한 플랙스로 뜨는",
  //         pubDate: "2023-06-30",
  //         categoryName: "국내도서>건강/취미>공예>뜨개질/퀼트/십자수/바느질",
  //         fixedPrice: true,
  //         mallType: "BOOK",
  //         customerReviewRank: 0,
  //         cover:
  //           "https://image.aladin.co.kr/product/31960/63/coversum/k512833354_1.jpg",
  //         itemId: 319606356,
  //         subInfo: "",
  //         isbn13: 9791169259729,
  //         stockStatus: "",
  //         publisher: "미호",
  //         priceSales: 16200,
  //         salesPoint: 0,
  //         adult: false,
  //         categoryId: 53568,
  //         priceStandard: 18000,
  //         mileage: 900,
  //       },
  //       {
  //         author: "이은주 (지은이), 박지영 (그림)",
  //         isbn: "K412833354",
  //         link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=319605948&partner=openAPI&start=api",
  //         description:
  //           "글자의 짜임과 원리를 반복적으로 배우는 기초 한글책이다. 유아의 발달 과정에 맞춰 단계별 한글 학습이 가능하다. 읽기, 쓰기, 말하기를 한 권에 담았다. 총 14권, 한 권에 20p로 아이들의 집중력을 끌어 올려 간단하고 재미있게 한글을 학습할 수 있다.",
  //         title: "아이키움 워크북 한글 4·5세 : 1~14단계 세트 - 전14권",
  //         pubDate: "2023-06-12",
  //         categoryName: "국내도서>유아>유아 교양/학습>유아 언어/인지/한글",
  //         fixedPrice: false,
  //         mallType: "BOOK",
  //         customerReviewRank: 0,
  //         cover:
  //           "https://image.aladin.co.kr/product/31960/59/coversum/k412833354_1.jpg",
  //         itemId: 319605948,
  //         subInfo: "",
  //         isbn13: 8809574291539,
  //         stockStatus: "",
  //         publisher: "아이키움북",
  //         priceSales: 50400,
  //         salesPoint: 0,
  //         adult: false,
  //         categoryId: 35126,
  //         priceStandard: 56000,
  //         mileage: 2520,
  //       },
  //     ],
  //   },
  // };
  // console.log(data.object.item);
  useEffect(() => {
    const getBest = async () => {
      try {
        const res = await axios.get("/api/aladinbestseller");
        const result = res.data;
        setBookData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getBest();
  }, []);
  const handleBestAdd = item => {
    setSelectedItem(item);
    navigate("/add");
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center w-4/5 py-5 m-auto border rounded">
        <h2 className="text-2xl text-center p-10">베스트 셀러 추천</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 px-5">
          {bookData.item?.map((item, index) => {
            if (index < 6) {
              return (
                <div
                  className="p-5 flex items-center w-full h-96 hover:bg-slate-200"
                  key={index}
                >
                  <div
                    className="w-40 h-64"
                    onClick={item => handleBestAdd(item)}
                  >
                    <img src={item.cover} alt="" className="w-full h-full" />
                  </div>
                  <ul className="flex flex-col w-80 p-5 justify-center items-center">
                    <li className="py-2 text-xl font-bold line-clamp-1 leading-10">{item.title}</li>
                    <li className="py-2 text-[#626262]">{item.categoryName}</li>
                    <li className="py-2 text-[#626262]">
                      {item.author} / {item.publisher} /{item.pubDate}
                    </li>
                    <li className="py-2 text-[#626262]">{item.description}</li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
