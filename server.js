const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const dotenv = require('dotenv');

// 載入環境變數
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 確保 API 金鑰存在
const FRED_API_KEY = process.env.FRED_API_KEY;
if (!FRED_API_KEY) {
  console.error('錯誤: 未設定 FRED_API_KEY 環境變數');
  process.exit(1);
}

// 提供靜態檔案
app.use(express.static(path.join(__dirname, 'public')));

// FRED API 代理
app.get('/api/fred', async (req, res) => {
  try {
    const { url } = req.query;
    
    // 安全檢查
    if (!url || !url.startsWith('https://api.stlouisfed.org/')) {
      return res.status(400).json({ error: '無效的 URL' });
    }
    
    // 替換 URL 中的預留 API 金鑰
    const actualUrl = url.replace('API_KEY_PLACEHOLDER', FRED_API_KEY);
    
    // 發送請求到 FRED API
    const response = await fetch(actualUrl);
    
    if (!response.ok) {
      throw new Error(`FRED API 回應錯誤: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('API 請求錯誤:', error);
    res.status(500).json({ error: '請求 FRED API 時發生錯誤', message: error.message });
  }
});

// 所有其他路由返回 index.html (SPA 支援)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器運行於 http://localhost:${PORT}`);
  console.log('按 Ctrl+C 停止伺服器');
});
