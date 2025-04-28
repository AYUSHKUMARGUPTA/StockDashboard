import React from "react";
import { StockData } from "../types";

interface Props {
  stocks: StockData[];
}

const StockTable: React.FC<Props> = ({ stocks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">Symbol</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Change %</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol} className="text-center">
              <td className="py-2 px-4">{stock.symbol}</td>
              <td className="py-2 px-4">${stock.price.toFixed(2)}</td>
              <td
                className={`py-2 px-4 ${
                  stock.changePercent >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.changePercent.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
