# 金融市場追蹤儀表板

這是一個即時顯示金融市場關鍵指標的儀表板，包括美元指數、VIX 恐慌指數、消費者信心指數以及美國 2 年期和 10 年期公債殖利率曲線。

## 功能特色

- 美元指數 (DXY) 即時追蹤
- VIX 恐慌指數監控
- 密西根大學消費者信心指數
- 美國 2 年期和 10 年期公債殖利率曲線比較
- 響應式設計，適合各種裝置
- 滾動動畫效果

## 安裝與設定

### 前置需求

- Node.js 14.0 或更高版本
- FRED API 金鑰 (可在 [FRED 網站](https://fred.stlouisfed.org/docs/api/api_key.html) 申請)

### 安裝步驟

1. 複製專案
```bash
git clone <儲存庫網址>
cd financial-dashboard
```

2. 安裝依賴
```bash
npm install
```

3. 設定環境變數
```bash
cp .env.example .env
```
然後編輯 `.env` 檔案，填入您的 FRED API 金鑰

4. 啟動伺服器
```bash
npm start
```

5. 開啟瀏覽器，訪問 http://localhost:3000

## 技術架構

- 前端：HTML, CSS, JavaScript, Chart.js, GSAP
- 後端：Node.js, Express
- API：FRED (Federal Reserve Economic Data)

## 部署說明

本專案可以部署到 Vercel、Netlify 或其他支援 Node.js 的平台。請確保在部署平台上設定 `FRED_API_KEY` 環境變數。

## 授權

MIT 授權
