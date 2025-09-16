import React, { useState } from 'react';

// Reusable button component
const CalcButton = ({ value, onClick, className = '' }) => {
  return (
    <button
      className={`bg-gray-200 hover:bg-gray-300 text-xl p-2 rounded-lg shadow ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

const Calculator = () => {
  const [display, setDisplay] = useState('');

  // functions
  const append = (val) => setDisplay((prev) => prev + val);
  const clear = () => setDisplay('');
  const del = () => setDisplay((prev) => prev.slice(0, -1));
  const equal = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-6 mb-5">Project No.5</h1>
      <div className="bg-[#64748b] w-full max-w-sm min-h-[400px] flex flex-col mb-6 items-center rounded-lg shadow-lg relative border-2 border-black">
        <h1 className="text-3xl font-bold mt-6 mb-5 text-white">Calculator</h1>

        {/* display */}
        <div className="text-white bg-[#111827] w-[90%] min-h-[40%] text-4xl p-8 overflow-x-auto">
          {display}
        </div>

        {/* buttons */}
        <div className="grid grid-cols-4 gap-4 mb-2.5 w-[90%] bg-[#111827] p-8">
          {/* top row */}
          <CalcButton value="AC" onClick={clear} />
          <button
            className="bg-gray-200 hover:bg-gray-300 text-xl p-2 rounded-lg shadow"
            onClick={del}
          >
            DE
          </button>
          <CalcButton value="." onClick={append} />
          <CalcButton value="/" onClick={append} />

          {/* numbers */}
          <CalcButton value="7" onClick={append} />
          <CalcButton value="8" onClick={append} />
          <CalcButton value="9" onClick={append} />
          <CalcButton value="*" onClick={append} />

          <CalcButton value="4" onClick={append} />
          <CalcButton value="5" onClick={append} />
          <CalcButton value="6" onClick={append} />
          <CalcButton value="-" onClick={append} />

          <CalcButton value="1" onClick={append} />
          <CalcButton value="2" onClick={append} />
          <CalcButton value="3" onClick={append} />
          <CalcButton value="+" onClick={append} />

          {/* bottom row */}
          <CalcButton value="0" onClick={append} />
          <CalcButton value="00" onClick={append} />
          <CalcButton value="=" onClick={equal} className="col-span-2" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
