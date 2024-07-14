const DSShoes = (propShoes) => {
  return (
    <div className="grid grid-cols-3 pt-10">
      {propShoes.arrShoes.map((item, index) => {
        return (
          <div className="border-black border mx-2 my-5 text-center rounded-md overflow-hidden">
            <img
              className="w-full  hover:scale-105 mb-5"
              src={item.image}
              alt=""
            />
            <h3 className="text-xl">{item.name}</h3>
            <h2 className="text-xs">{item.price} $</h2>
            <button
              onClick={() => {
                propShoes.LayDuLieuShoes(item);
              }}
              className="bg-black text-white rounded-md py-2 px-5 mb-4"
            >
              Xem chi tiết
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DSShoes;
