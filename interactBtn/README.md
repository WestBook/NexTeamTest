# Like / Dislike 按鈕互動規格文件

## 👍 Like 按鈕（喜歡）

### 1. 基本渲染需求

- 按鈕需具備 class 名稱：`like-button`。
- 初始 Like 數量：**100**
- 按鈕文字格式：`Like | 100`
- 數字需包在 `<span class="likes-counter">100</span>`

### 2. 互動行為

#### 點擊（未點過）

- Like 數量 **+1**
- 按鈕加入 `liked` class

#### 再次點擊（已點過）

- Like 數量 **-1**
- 移除 `liked` class

#### Dislike 已點擊 → 點 Like

- Like 數量 **+1**
- Like 加上 `liked`
- Dislike 數量 **-1**
- Dislike 移除 `disliked`

---

## 👎 Dislike 按鈕（不喜歡）

### 1. 基本渲染需求

- 按鈕需具備 class 名稱：`dislike-button`
- 初始 Dislike 數量：**25**
- 顯示文字格式：`Dislike | 25`
- 數字需包在 `<span class="dislikes-counter">25</span>`

### 2. 互動行為

#### 點擊（未點過）

- Dislike 數量 **+1**
- 按鈕加入 `disliked` class

#### 再次點擊（已點過）

- Dislike 數量 **-1**
- 移除 `disliked` class

#### Like 已點擊 → 點 Dislike

- Dislike 數量 **+1**
- Dislike 加上 `disliked`
- Like 數量 **-1**
- Like 移除 `liked`

---

## 📌 Like / Dislike 互斥行為

- Like 與 Dislike **不能同時為啟用狀態**
- 點擊其中一個會取消另一個

## 📘 行為規則總表

| 行為               | Like 數 | Dislike 數 | Like class | Dislike class |
| ------------------ | ------- | ---------- | ---------- | ------------- |
| 點 Like（未點）    | +1      | 不變       | 加 liked   | 不變          |
| 點 Like（已點）    | -1      | 不變       | 移除 liked | 不變          |
| 點 Dislike（未點） | 不變    | +1         | 不變       | 加 disliked   |
| 點 Dislike（已點） | 不變    | -1         | 不變       | 移除 disliked |
| Dislike→Like       | +1      | -1         | 加 liked   | 移除 disliked |
| Like→Dislike       | -1      | +1         | 移除 liked | 加 disliked   |

## Available packages and libraries

React (v18.2.0)
Classnames (v2.3.1)
Typescript (v4.2.4)
