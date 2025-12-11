
# RunningClock 倒數計時器 React 元件規格文件

## 📌 功能概述
本元件需實作一個可倒數的計時器 RunningClock，會依照使用者輸入的「分鐘」與「秒數」進行倒數，直到顯示為 **00:00**。

---

## 📄 HTML 結構（不得更動）
```
<label>
  <input type="number">
  Minutes
</label>

<label>
  <input type="number">
  Seconds
</label>

<button>START</button>
<button>PAUSE / RESUME</button>
<button>RESET</button>

<h1 data-testid="running-clock">00:00</h1>
```

---

# 1. 時間顯示需求

### ▸ 初始值
- `<h1 data-testid="running-clock">` 的初始值必須是 **00:00**

### ▸ 顯示格式
- 採用 **mm:ss** 格式顯示時間
- 若為 **1 分 5 秒 → 顯示 01:05**
- 若為 **1 分 65 秒 → 自動換算 02:05**

---

# 2. 使用者輸入（Inputs）需求

- 修改 `<input>` 內容 **不會立即更新** `<h1>` 內的時間
- 不需加入 min 或 max 限制
- 不需處理負數（測試不會評估此部分）

---

# 3. 行為需求（核心邏輯）

## 3.1 START 按鈕
1. 按下 START 時：
   - 依照使用者輸入的分鐘與秒數計算總秒數
   - 將 `<h1>` 顯示時間更新為輸入的時間
   - 開始倒數
2. 計時器啟動後，再按 START：
   - 重新以相同輸入時間重新開始倒數（不清空 input）

---

## 3.2 倒數更新
- 計時器每秒更新一次畫面
- 當時間倒數到 **00:00**：
  - 停止計時器
  - 保持顯示 **00:00**

---

## 3.3 PAUSE / RESUME 按鈕
- 使用同一顆按鈕
- 按下 **PAUSE**：
  - 暫停倒數
- 按下 **RESUME**：
  - 從暫停位置繼續倒數

---

## 3.4 RESET 按鈕
按下 RESET 時：

### 1. 兩個 input 值重設為 0  
### 2. `<h1>` 顯示重設為 **00:00**  
### 3. 若計時器正在運行 → 必須停止倒數  

---

# 4. 注意事項與限制

## 🚫 不可更改的元素（測試會使用）
- `<input>` 標籤內容
- `<button>` 文字內容（START、PAUSE / RESUME、RESET）
- `<h1 data-testid="running-clock">` 及其屬性名稱

## 🚫 不可使用 React 以外的套件  
僅允許從 `react` 匯入 Hook（如 useState, useEffect 等）。

---

# ✔ 實作提示
- 不要在 START 時清空 input 值
- 使用 setInterval 或 setTimeout 都可，但需妥善清除
- 將秒數正規化（如 65 秒 → 自動換算成 1 分 5 秒）

---

