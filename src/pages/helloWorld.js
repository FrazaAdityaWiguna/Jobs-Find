import React, { useState, useEffect } from "react";

const HelloWorld = () => {
  let getNums = localStorage.getItem("nums");
  const [nums, setNums] = useState(
    getNums < 1 || getNums == null ? 10 : getNums
  );

  useEffect(() => {
    if (nums > 0) {
      setTimeout(() => setNums((prev) => prev - 1), 1000);
    }
    localStorage.setItem("nums", nums);
  }, [nums]);

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col">
      <div>{nums}</div>
      <button
        className="btn bg-blue-500 px-5 py-2 rounded text-white"
        onClick={() => alert("hello")}
        disabled={nums > 0}
      >
        Oke
      </button>
    </div>
  );
};

export default HelloWorld;
