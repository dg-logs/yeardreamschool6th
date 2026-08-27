const express = require('express');
const router = express.Router(); //app의 router 기능과 동일한 기능 수행

router.get('/hello', (req, res)=>{
    res.send('Router Module GET');
});

router.post('/hello', (req, res)=>{
    res.send('Router Module POST');
});

module.exports = router;