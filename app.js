const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sinhVienRouter = require('./routes/sinhvienRoute');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


mongoose.connect('mongodb+srv://sieuhoadz:sieuhoadz@cluster0.0kyy35a.mongodb.net/db1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Ket noi thanh cong");
}).catch((err) => {
    console.error(err);
});

//su dung router

app.use('/', sinhVienRouter);

//su dung ejs
//app.set('view engine', 'ejs');

// tao port
const PORT = process.env.PORT||3002;

//chay server
app.listen(PORT, () =>{
    console.log(`server dang chay o cong ${PORT}`);
}); 