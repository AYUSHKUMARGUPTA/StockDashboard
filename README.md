# StockDashboard

# 📈 Stock Price Dashboard

A **React + TypeScript + Tailwind CSS** application that fetches live stock data from **Finnhub API** and displays it in a responsive table.  
Users can **search**, **sort** by price or % change, and **view a simple stock chart**.

---

## 🚀 Live Demo
[View the deployed app here!](https://stock-dashboard-ayushs-projects-0daa8da5.vercel.app/)  
(*Replace with your actual deployed URL*)

---

## 🛠 Tech Stack
- React (Vite)
- TypeScript
- Tailwind CSS
- Chart.js (via react-chartjs-2)
- Finnhub API

---

## 📦 Features
- ✅ Fetch and display live stock data (Symbol, Price, Change %)
- ✅ Responsive table with Tailwind CSS
- ✅ Search bar to filter stocks live
- ✅ Sort stocks by Price or Change %
- ✅ Loading spinner during API calls
- ✅ Error handling for API failures
- ✅ Bar chart of stock prices using Chart.js
- ✅ Deployed on Vercel

---


## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/stock-dashboard.git
cd stock-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a .env file in the root:

```bash
VITE_FINNHUB_API_KEY=your_actual_finnhub_api_key_here
```

### 4. Run locally

```bash
npm run dev
```

### 5. Deploy
- Push to GitHub
- Connect to Vercel (or Netlify)
- Set the environment variable VITE_FINNHUB_API_KEY on Vercel
- Deploy!