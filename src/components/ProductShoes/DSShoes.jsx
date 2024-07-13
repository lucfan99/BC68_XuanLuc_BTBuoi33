const DSShoes = ({ propShoes }) => {
  return (
    <div className="grid grid-cols-3">
      {propShoes.arrSP.map((item, index) => {
        return (
          <div>
            <img className="w-full" src={item.hinhAnh} alt="" />
            <h3 className="text-xl">{item.tenSP}</h3>
            <button
              onClick={() => {
                props.layDuLieuDT(item);
              }}
              className="bg-green-500 text-white rounded-md py-2 px-5"
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
