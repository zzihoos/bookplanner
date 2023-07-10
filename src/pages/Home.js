import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#E4E4DC] pt-10">
        <div className="w-[500px] h-[500px] max-w-screen max-h-screen">
          <img
            className="cursor-pointer shadow-md "
            onClick={() => {
              navigate("/todo");
            }}
            src="./bookplanner.png"
            alt="logo"
          />
        </div>
        <div className="text-center my-5">
          <span>Copyright 2023. 책벌레 all rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Home;
