import React, { useState } from "react";

interface TicketCounterProps {
  ticketType: string;
  price: number;
}

const TicketCounter: React.FC<TicketCounterProps> = ({ ticketType, price }) => {
  const [count, setCount] = useState(0);
  const totalPrice = count * price;

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-4 p-2 md:p-4">
      
      <div className="w-full md:w-1/2 flex items-center justify-between border border-primary rounded-lg px-3 py-2 md:px-4 md:py-2">
        <div className="flex flex-col">
          <span className="font-semibold text-primary text-base md:text-lg">{ticketType}</span>
          <span className="text-primary text-xs md:text-sm">Rp. {price.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={decrement}
            className="btn btn-circle btn-sm md:btn-md bg-primary border-primary text-white"
          >
            -
          </button>
          <span className="text-base md:text-lg font-semibold text-primary">{count}</span>
          <button
            onClick={increment}
            className="btn btn-circle btn-sm md:btn-md bg-primary border-primary text-white"
          >
            +
          </button>
        </div>
      </div>

      <div className="w-full md:w-[40%] flex flex-col items-center text-center border border-primary rounded-lg px-3 py-2 md:px-4 md:py-2">
        <span className="font-semibold text-primary text-base md:text-lg">Total</span>
        <span className="text-primary text-xs md:text-sm">Rp. {totalPrice.toLocaleString()}</span>
      </div>

      <button className="w-full md:w-[10%] btn btn-lg bg-primary text-white text-sm font-semibold rounded-lg px-3 py-2 md:px-6 md:py-2">
        LANJUTKAN
      </button>
      
    </div>
  );
};

export default TicketCounter;
