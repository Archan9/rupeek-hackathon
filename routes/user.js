const router=require('express').Router();
const controllers=require('../controllers/user');
const {protect}=require('../middlewares/protect');

router.post('/sendotp',controllers.sendotp);

router.post('/verify',controllers.verify);

router.put('/',protect,controllers.updateUser);

module.exports=router;