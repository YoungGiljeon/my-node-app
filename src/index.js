const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(express.json());

// 라우트
app.get('/', (req, res) => {
  res.json({
    message: 'CI/CD 파이프라인 실습 앱입니다!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행중입니다.`);
});

module.exports = app;