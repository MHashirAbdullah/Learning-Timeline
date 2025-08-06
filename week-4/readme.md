# 🧠 Advanced Python Projects — Async, Metaclasses, Data Analysis
---

## ✅ Tasks Completed

### 1. **Asynchronous Programming vs Synchronous Programming**

#### 🔧 Synchronous
- Executes one task at a time (blocking).
- Waits for I/O operations (e.g., API calls), causing slowdowns.

#### ⚡ Asynchronous
- Runs multiple I/O tasks concurrently using `asyncio` and `aiohttp`.
- Frees up execution while waiting, making it faster for network tasks.

✅ *Built a fully async web scraper using `aiohttp` to fetch and process data from multiple APIs (CoinGecko).*

---

### 2. **Metaclasses and Dynamic Class Creation**

- Learned how Python classes are themselves created by **metaclasses**.
- Used a custom metaclass to:
  - Automatically wrap all class methods with logging
  - Demonstrate how behavior can be injected at class-creation time

✅ *Theory observed through building a metaclass `AutoLoggerMeta` that logs every method call dynamically.*

---

### 3. **Async Web Scraper**

- Used `aiohttp` and `asyncio.gather()` to fetch coin data (e.g., Bitcoin, Ethereum) from CoinGecko API.
- Implemented error handling for failed requests.
- Logged successful and failed API calls.

📁 File: `Async&Sync.py`
🚀 *Fetches multiple API endpoints concurrently — ~10x faster than sequential code.*

---

### 4. **pandas Basics + Data Analysis**

- Worked with the **Netflix Movies and TV Shows** dataset from Kaggle.
- Key pandas features used:
  - `read_csv()`, `value_counts()`, `groupby()`, filtering, and sorting
  - Parsed date fields and extracted trends
- Cleaned null data and converted date fields using `pd.to_datetime`.

✅ *Plotted top countries by content and content trends over time using `matplotlib`.*

📁 File: `notebook.ipynb`

---

## 📊 Key Insights from Netflix Dataset

- **Top Countries:** US and India dominate Netflix’s content catalog.
- **Growth Trend:** Content additions spiked.

