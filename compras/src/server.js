require('dotenv').config();
const app = require('./app');

app.listen(process.env.APP_PORT, () => console.log('Compras running on port 3000'));