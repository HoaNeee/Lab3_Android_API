const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) =>{
    res.send('vao api mobile')
});

router.get('/list', async (req, res)=>{
    try{
        const sinhviens = await sinhvien.find();
        res.render('sinhvien', {sinhviens:sinhviens});
        
        
    }
    catch (error){
        console.error(error);

        res.json({error: error})
    }
} );


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