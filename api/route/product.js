const express = require('express');
const router = express.Router();

router.get('/read',(req, res, next)=>{
    res.send("<h1 style='color:orange; background-color:black; text-align:center;'>This is Read</h1>");
    res.status(200).json({
        message: 'Read'
    });
    
});
router.post('/create',(req, res, next)=>{
    res.send("<h1 style='color:green; background-color:black; text-align:center;'>This is Create</h1>");
    res.status(200).json({
        message: 'Create'
    });
});
router.put('/all_update',(req, res, next)=>{
    res.send("<h1 style='color:yellow; background-color:black; text-align:center;'>This is All Update</h1>");
    res.status(200).json({
        message: 'All Update'
    });
});
router.patch('/update',(req, res, next)=>{
    res.send("<h1 style='color:blue; background-color:black; text-align:center;'>This is Update</h1>");
    res.status(200).json({
        message: 'Update'
    });
});
router.delete('/delete',(req, res, next)=>{
    res.send("<h1 style='color:red; background-color:black; text-align:center;'>This is Delete</h1>");
    res.status(200).json({
        message: 'Delete'
    });
});

module.exports = router;