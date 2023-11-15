const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');


 const allowedOrigins = ['http://127.0.0.1:3000', 'http://another.origin.com'];

app.use((req, res, next) => {
  const origin = req.get('Origin');
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

require('./config/mongoose.config');

require('./routes/Routes.js')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );