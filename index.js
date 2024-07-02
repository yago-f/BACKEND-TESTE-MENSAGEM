require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3020;
const cors = require('cors');
const { sequelize } = require('./config/database');
// const passportConfig = require('./middlewares/passport')(app);

app.use(cors());
app.use(express.json());
// app.use(passportConfig.initialize());

const routes = require('./routes/routes')(app);
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((error) => {
  console.error('Erro ao conectar ao banco de dados:', error);
});
