import React, { useEffect, useState } from "react";

const ExpProgressBar = ({ todoData, level, setLevel }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedTodos = todoData.icategory?.filter(item => item.del === 1);
    setCompletedCount(completedTodos?.length % 10);
    const updatedProgress = (completedTodos?.length % 10) * 10;
    setProgress(updatedProgress);
    if (updatedProgress == 0 && completedTodos?.length > 0) {
      setLevel(level => level + 1);
      setCompletedCount(0);
      setProgress(0);
    }
  }, [todoData]);

  return (
    <div className="flex justify-between items-center">
      <div className="text-center text-xl w-1/12">Lv.{level}</div>
      <div className="w-11/12 h-6 bg-zinc-500 text-white text-center relative">
        <div
          className="h-6 absolute"
          style={{
            width: `${progress > 100 ? progress - 100 : progress}%`,
            background: "black",
          }}
        >
          <span className="relative z-10 text-center">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

const BookProgressBar = ({ item }) => {
  // 책갈피 기능 = '북마크값 나누기 전체페이지값 곱하기 100'
  const [bookProgress, setBookProgress] = useState();
  useEffect(() => {
    const bookmark = (item.bookmark / 444) * 100;
    setBookProgress(bookmark);
  }, []);
  // 실제로 쓸 데이터
  // useEffect(() => {
  //   if (전체페이지 !== null) {
  //     const bookmark = (item.bookmark / 전체페이지) * 100;
  //     setBookProgress(bookmark);
  //   } else {
  //     return null;
  //   }
  // }, []);

  return (
    <div
      className="absolute left-0 top-0 bg-red-100 h-14 p-3 rounded"
      style={{ width: `${bookProgress}%` }}
    >
      {item.bookmark}
    </div>
  );
};

export { BookProgressBar, ExpProgressBar };
