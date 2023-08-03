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

router.post('/loan/open',protect,controllers.createLoan);

router.put('/loan/open/:id',protect,controllers.acceptLoan);

router.get('/loan/open',protect,controllers.getAllBorrowedLoans);

router.get('/loan/open/initiated',protect,controllers.getAllInitiatedoans);

router.get('/loan/open/pending',protect,controllers.getAllPendingLoans);

router.get('/loan/open/completed',protect,controllers.getAllCompletedLoans);

router.get('/loan/open/lender',protect,controllers.getAllLoansAsLender);

module.exports=router;