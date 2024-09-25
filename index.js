const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const rateLimit = require('express-rate-limit');
const { userRouter, adminRouter } = require('./router');
const { PORT } = require('./config/config');
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});

app.use(express.json());
app.use(cors());
app.use(limiter);

app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
