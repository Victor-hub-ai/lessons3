const { Router } = require('express');
const router = Router();
const path = require('path');
const bodyParser = require('body-parser')



router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../publick','index.html'));
})

router.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname, '../publick','about.html'));
})

router.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname, '../publick','register.html'));
})


module.exports = router;