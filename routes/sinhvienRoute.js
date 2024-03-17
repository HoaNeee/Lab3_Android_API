const express = require('express');

const router = express.Router();

const sinhvien = require('../models/sinhvienModel');
const e = require('express');

router.get('/', async (req, res)=>{
    try{
        const sinhviens = await sinhvien.find();
        res.render('sinhvien', {sinhviens:sinhviens});
        
        
    }
    catch (error){
        console.error(error);

        res.json({error: error})
    }
} );


//post
router.post('/sinhvien', async(req, res) =>{
    try{
        const {masv, tensv} = req.body;// lây dữ liệu

        const sinhvien1 = new sinhvien({masv,tensv});//toa doi tượng mới với dữ liệuư
        
        await sinhvien1.save();
        res.json(sinhvien1);
        console.log(sinhvien1);
    }
    catch (error){
        console.error(error);

        res.json({error: error})
    }
});

//put
router.put('/sinhvien/:_id', async (req, res) =>{
    try{
        const _id = req.params._id;
        const {masv, tensv} = req.body;
        const updateSinhVien = await sinhvien.findByIdAndUpdate(_id, {masv, tensv}, {new: true});
        res.json(updateSinhVien);
        console.log(updateSinhVien);
    }catch (error){
        console.error(error);

        res.json({error: error})
    }

});

//delete

router.delete('/sinhvien/:_id', async (req, res) =>{
    try{
        const _id = req.params._id;
        const deleteSinhVien = await sinhvien.findByIdAndDelete(_id);
        res.json(deleteSinhVien);
        console.log(deleteSinhVien);

    }catch (error){
        console.error(error);

        res.json({error: error})
    }
});
module.exports = router;