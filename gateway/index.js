const express = require('express');
const cors = require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());
app.use(express.json());

// customer redirect proxy
app.use('/api/customer', createProxyMiddleware({
    target: 'http://localhost:8001',
    changeOrigin: true
}));

// products redirect proxy
app.use('/api/shopping', createProxyMiddleware({
    target: 'http://localhost:8002',
    changeOrigin: true
}));   

// shopping redirect proxy
app.use('/api/shopping', createProxyMiddleware({
    target: 'http://localhost:8003',
    changeOrigin: true
}));

app.get('/api', (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "API": "API GATEWAY",
          }
      );
});

app.use('/', (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "API": "API GATEWAY",
          }
      );
});

app.listen(8000, () => {
    console.log('gateway service listening on port 8000');
});