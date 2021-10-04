const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { authToken } = require('./middleware/token');
const dotenv = require('dotenv')
const db = require('./models')
const router = require('./routes/index')

dotenv.config()
const app = express();
app.use(express.json());
const port = 80;

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공')
  })
  .catch(console.error)

app.use('/', router)

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
