import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relatvie h-screen bg-[#E4E4DC]">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-md "
          onClick={() => {
            navigate("/todo");
          }}
          src="./bookplanner.png"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Home;
