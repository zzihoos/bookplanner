import React, { useEffect, useState } from "react";

function ProgressBar({ todoData, level, setLevel }) {
  const [completedCount, setCompletedCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [restProgress, setRestProgress] = useState(0);
  const [progressText, setProgressText] = useState("");

  useEffect(() => {
    const completedTodos = todoData.filter(item => item.completed);
    const count = completedTodos.length;
    setCompletedCount(count);
    const updatedProgress = count * 10;
    setProgress(updatedProgress);
    if (updatedProgress >= 100) {
      setLevel(prevLevel => prevLevel + 1);
      progressReset();
      setRestProgress(updatedProgress - 100);
    }
    console.log(restProgress);
  }, [todoData]);

  const progressReset = () => {
    setProgress(0);
  };

  useEffect(() => {
    if (progress <= 100) {
      setProgressText(`${progress}`);
    } else {
      setProgressText(`${restProgress}`);
    }
  }, [progress, restProgress]);

  return (
    <div className="flex justify-between items-center">
      <div className="text-center text-xl w-1/12">Lv.{level}</div>
      <div className="w-11/12 h-6 bg-zinc-500 text-white text-center relative">
        <div
          className="progress h-6 absolute"
          style={{
            width: `${progress > 100 ? restProgress : progress}%`,
            background: "black",
          }}
        >
          <span className="relative z-10 text-center">{progressText}%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
