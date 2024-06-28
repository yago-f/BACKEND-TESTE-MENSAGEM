const express = require('express');
const app = express();
const PORT = process.env.PORT || 3020;
const cors = require('cors');
const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
