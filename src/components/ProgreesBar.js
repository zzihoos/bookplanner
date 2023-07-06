import React, { useEffect, useState } from "react";

const ExpProgressBar = ({ todoList, level, setLevel, todoListOrigin }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedTodos = todoListOrigin.filter(item => item.finish === 1);
    const completedCount = completedTodos?.length % 10;
    const updatedProgress = completedCount * 10;

    setCompletedCount(completedCount);
    setProgress(updatedProgress);

    if (updatedProgress === 0 && completedTodos?.length > 0) {
      // setLevel(level => level + 1);
      setCompletedCount(0);
      setProgress(0);
    }
  }, [todoList, todoListOrigin]);

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
  const totalpage = parseInt(item.totalpage);

  useEffect(() => {
    if (totalpage !== null) {
      const bookmark = (item.bookmark / totalpage) * 100;
      setBookProgress(bookmark);
    } else {
      return null;
    }
  }, []);

  return (
    <div
      className="absolute left-0 bottom-0 bg-black/30 h-4 text-sm rounded"
      style={{ width: `${bookProgress}%` }}
    ></div>
  );
};

export { BookProgressBar, ExpProgressBar };
