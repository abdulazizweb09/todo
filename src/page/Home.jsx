import { Checkbox } from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Home() {
  let [data, setData] = useState(JSON.parse(localStorage.getItem("todos")));
  let [modalka, setModalka] = useState(false);
  let navigate = useNavigate();
  let timeoutRef = useRef(null);
  let date = new Date();
  let month = date.getMonth();
  let months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  function to() {
    navigate("/new");
  }
  function modal() {
    timeoutRef.current = setInterval(() => {
      setModalka(true);
    }, 1000);
  }

  function deleted() {
    data.map((value, index) => {
      if (value.chek) {
        data.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(data));
        setModalka(false);
      }
    });
  }
  function clear() {
    clearInterval(timeoutRef.current);
  }
  function cancel() {
    setModalka(false);
  }
  function chek(e, value) {
    data.map((item) => {
      if (e.target.checked && item.id === value.id) {
        item.chek = true;
      }
    });
  }
  return (
    <div className="mx-auto container font-mono bg-black h-[100vh] relative text-white p-5">
      <div className="fixed top-10">
        <h1 className="text-white text-2xl">Qaydlar</h1>
      </div>
      {modalka && (
        <div className="z-100 fixed  bg-[#212121] w-[100%] left-0 top-0 h-22">
          <div className="flex justify-between p-5">
            <i onClick={cancel} className="fa-solid fa-xmark"></i>
            <i className="fa-solid fa-list-check"></i>
          </div>
          <div>
            <p className="ml-5 text-2xl -mt-1">0 ta element tanlangan</p>
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-15 pt-20">
        {/* <div className="w-[40%] rounded-xl bg-[#212121] p-5">
          <h3>oqqand 1 kg</h3>
          <p className="text-neutral-400 text-[14px] w-30 mt-5 mb-5">
            Lorem ipsum dolor sit amet ergth erhgh rgerg rhhr rth.
          </p>
          <p>
            {`${month} `}
            {months[month]}
          </p>
        </div> */}
        {data &&
          data.map((value) => {
            return (
              <div
                key={value.id}
                onTouchStart={modal}
                onTouchEnd={clear}
                onMouseDown={modal}
                onMouseUp={clear}
                onMouseLeave={clear}
                className="w-[40%] rounded-xl relative bg-[#212121] p-5"
              >
                <h3>{value.title}</h3>
                <p className="text-neutral-400 text-[14px] w-30 mt-5 mb-5">
                  {value.description}
                </p>
                <p>
                  {`${month} `}
                  {months[month]}
                </p>
                {modalka && (
                  <div className="">
                    <input
                      type="checkbox"
                      value={value.chek}
                      onChange={(e) => {
                        chek(e, value);
                      }}
                      className="absolute right-5 bottom-5 w-5 h-5"
                    />
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div>
        <div
          onClick={to}
          className="w-15 h-15 rounded-full bottom-24 right-7 bg-[#ffab00] fixed"
        >
          <i className="fa-solid fa-plus mt-[35%] ml-[26%] text-2xl cursor-pointer"></i>
        </div>
      </div>
      <div className="fixed border-t-[1px] border-neutral-400 pt-1 bottom-0 left-0 w-full flex justify-center gap-25 pb-4">
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-clipboard text-xl"></i>
          <p className="text-sm">Qaydlar</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-list-check text-xl"></i>
          <p className="text-sm">Vazifalar</p>
        </div>
      </div>
      {modalka && (
        <div className="z-100 fixed">
          <div className="fixed border-t-[1px] bg-[#212121] pt-3 bottom-0 left-0 w-full flex justify-center gap-25 pb-4">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-clipboard text-xl"></i>
              <p className="text-sm">test</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-clipboard text-xl"></i>
              <p className="text-sm">test</p>
            </div>
            <div onClick={deleted} className="flex flex-col items-center">
              <i className="fa-solid fa-trash-can text-xl"></i>
              <p className="text-sm">O'chirish</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
