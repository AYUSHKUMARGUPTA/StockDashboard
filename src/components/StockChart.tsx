import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { StockData } from "../types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  stocks: StockData[];
}

const StockChart: React.FC<Props> = ({ stocks }) => {
  const data = {
    labels: stocks.map((s) => s.symbol),
    datasets: [
      {
        label: "Price ($)",
        data: stocks.map((s) => s.price),
        backgroundColor: "rgba(59, 130, 246, 0.5)", // Tailwind blue-500
      },
    ],
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Stock Prices Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default StockChart;
