import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { renderShoe1 } from "../redux/chiTietShoesSlice";
// import { renderShoe1 } from "../redux/chiTietShoesSlice";
const DSShoes = (propShoes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-3 pt-10">
      {propShoes.arrShoes.map((item, index) => {
        return (
          <div className="border-black border mx-2 my-5 text-center rounded-md overflow-hidden">
            <img
              className="w-full cursor-pointer hover:scale-105 duration-100 mb-5"
              src={item.image}
              alt=""
              onClick={() => {
                propShoes.LayDuLieuShoes(item);
                dispatch(renderShoe1(item));
              }}
            />
            <h3 className="text-xl">{item.name}</h3>
            <h2 className="text-2xl font-bold text-red-700 ">{item.price} $</h2>
            <Button
              onClick={showModal}
              className="bg-black text-white rounded-md py-2 px-5 mb-4 hover:bg-green-500"
            >
              Xem chi tiết
            </Button>
            <Modal
              title={item.name}
              open={isModalOpen}
              // onOk={handleOk}
              onCancel={handleCancel}
            >
              <img className="w-full" src={item.image} alt="" />
              <p className="text-blue-500 font-bold">{item.price} $</p>
              <p>{item.shortDescription}</p>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default DSShoes;
