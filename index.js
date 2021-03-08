// ! Npm pakatlerin yüklenmesi

const express = require('express');
const bodyParser = require('body-parser');
// ! veri tabanı bağlantısı 
const connect = require('./config/db');
//! yönlendirme  
const router = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

require('dotenv').config();
const app = express();

connect();
app.use(bodyParser.json());
app.use('/', router);
app.use('/', postRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('Server çalışıyor.');
});
