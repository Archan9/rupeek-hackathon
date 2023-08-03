const router=require('express').Router();
const controllers=require('../controllers/user');
const {protect}=require('../middlewares/protect');

router.post('/sendotp',controllers.sendotp);

router.post('/verify',controllers.verify);

router.put('/',protect,controllers.updateUser);

router.get('/',controllers.getAllUsers);

router.get('/auth',protect,controllers.getAllUsers);

router.post('/group',protect,controllers.createGroup);

router.get('/group',protect,controllers.getAllGroups);

router.get('/group/:id',protect,controllers.getGroupById);

module.exports=router;