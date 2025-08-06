import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

function Details() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let random = Math.trunc(Math.random() * 1000000);
  let navigate = useNavigate();
  let id = useParams().id;
  let [data, setData] = useState(JSON.parse(localStorage.getItem("todos")));

  console.log(data);
  useEffect(function () {
    data.map((item) => {
      if (item.id == id) {
        console.log(item);
        setTitle(item.title);
        setDescription(item.description);
      }
    });
  }, []);

  let date = new Date();
  let month = date.getMonth();
  let dey = date.getDate();
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
  function valid() {
    if (title.trim() <= 2) {
      toast.error("Nomi kiritilmadi !");
      return false;
    }
    if (description.trim() <= 5) {
      toast.error("Description kiritilmadi !");
      return false;
    }
    return true;
  }
  function to() {
    navigate("/");
  }
  function save() {
    if (!valid()) {
      return;
    }

    let res = {
      title: title,
      id: id,
      description: description,
      chek: false,
    };
       
   let updated = data.map((item) => {
     if (item.id == id) {
       return {
         ...item,
         title: title,
         description: description,
       };
     }
     return item;
   });

   localStorage.setItem("todos", JSON.stringify(updated));


    toast.success("Todo saqlandi !");
    navigate("/");
  }

  return (
    <div className="mx-auto container font-mono bg-black h-[100vh] relative text-white p-5">
      <div className="fixed top-5 flex justify-between left-0 right-0 px-5">
        <i onClick={to} className="fa-solid fa-arrow-left"></i>
        <i onClick={save} className="fa-solid fa-check"></i>
      </div>
      <div className="mt-15">
        <input
          type="text"
          className="border-0 w-full p-1 outline-0"
          placeholder="Nomi"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="text-[12px] text-neutral-300">{`${dey}-${months[month]} | ${description.length} ta belgi`}</p>
        <input
          type="text"
          className="border-0 w-full p-1 outline-0"
          placeholder="Title"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Details;
