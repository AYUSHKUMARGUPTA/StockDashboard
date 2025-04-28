import { useEffect, useState } from "react";
import StockTable from "./components/StockTable";
import LoadingSpinner from "./components/LoadingSpinner";
import { fetchStock } from "./api";
import { StockData } from "./types";
import SearchBar from "./components/SearchBar";
import StockChart from "./components/StockChart";

const symbols = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA"];

function App() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<"price" | "changePercent" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const results = await Promise.all(
          symbols.map(async (symbol) => {
            const data = await fetchStock(symbol);
            return {
              symbol,
              price: data.c,
              changePercent: data.dp,
            };
          })
        );
        setStocks(results);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const filteredStocks = stocks
    .filter((stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      if (sortOrder === "asc") {
        return a[sortKey] - b[sortKey];
      } else {
        return b[sortKey] - a[sortKey];
      }
    });

  const toggleSort = (key: "price" | "changePercent") => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-500 mt-5">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">📈 Stock Dashboard</h1>

      {/* Search Bar */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Sort Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => toggleSort("price")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Sort by Price
        </button>
        <button
          onClick={() => toggleSort("changePercent")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Sort by Change %
        </button>
      </div>

      {/* Table */}
      <StockTable stocks={filteredStocks} />
      <StockChart stocks={filteredStocks} />
    </div>
  );
}

export default App;
