import React, { useEffect, useState } from "react";

function ProgressBar({ todoData, level, setLevel }) {
  const [completedCount, setCompletedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedTodos = todoData.filter(item => item.completed);
    setCompletedCount(completedTodos.length % 10);
    const updatedProgress = (completedTodos.length % 10) * 10;
    setProgress(updatedProgress);
    if (updatedProgress == 0 && completedTodos.length > 0) {
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
          className="progress h-6 absolute"
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
}

export default ProgressBar;
