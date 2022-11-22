import React from "react";

const Input1 = ({ title, placeholder, img, funcInput }) => {
  return (
    <>
      <strong>{title}</strong>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={img} alt={img} />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
          placeholder={placeholder}
          onInput={(e) => funcInput(e)}
        />
      </div>
    </>
  );
};

export default Input1;
