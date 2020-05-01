const express = require('express');
const app = express();
const connectDB = require('./config/db');


const PORT = process.env.PORT || 3000;

//ROUTES
app.use(express.static('public')); //serve static page from public folder

app.use('/',require('./routes/index'));
app.use('/api',require('./routes/api'));

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));