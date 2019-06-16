const express=require('express');
var router = express.Router()
const home_Controllers=require('../controllers/home_controller');


router.get('/',home_Controllers.home);
router.post('/add',home_Controllers.create);
router.post('/delete',home_Controllers.destroy);
console.log('router loaded');
module.exports=router;