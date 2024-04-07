const express = require('express');

const router = express.Router();

const sinhvien = require('../models/sinhvienModel');


router.get('/', async (req, res)=>{
    try{
        const sinhviens = await sinhvien.find();
        res.json(sinhviens);
    }
    catch (error){
        console.error(error);
        res.json({error: error})
    }
} );


//post
router.post('/', async(req, res) =>{
    try{
        const {masv, tensv} = req.body;// lây dữ liệu

        let sinhvien1 = new sinhvien({
            masv: masv,
            tensv: tensv
        });//toa doi tượng mới với dữ liệuư
        
        await sinhvien1.save();
        
        res.status(201).json({message: 'insert thành công'})
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