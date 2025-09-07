import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ eval is unsafe for production
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "+"
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-80">
        <div className="mb-4 p-3 bg-black text-white rounded-lg text-right text-2xl">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl text-xl"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={handleCalculate}
            className="col-span-4 bg-green-600 hover:bg-green-500 text-white p-4 rounded-xl text-xl"
          >
            =
          </button>
          <button
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-xl text-lg"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}