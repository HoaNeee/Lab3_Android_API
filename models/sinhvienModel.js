const mongoose = require('mongoose');
const sinhvienSchema = new mongoose.Schema({
    masv: {
        type: String,
        require: true

    },
    tensv: {
        type: String,
        require: true
    }
});

const sinhvien = mongoose.model('sinhvien', sinhvienSchema);
module.exports = sinhvien;