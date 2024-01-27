const Cnews = require('../controllers/Cnews');
const router = require('express').Router();

router.get('/', Cnews.sendEconomyNews);

router.get('/stock', Cnews.sendStockNews);
router.get('/coin', Cnews.sendCoinNews);
router.get('/economy', Cnews.sendEconomyNews);

router.get('/reset', Cnews.resetNewsList);
router.get('/getstock', Cnews.getStockNews);
router.get('/getcoin', Cnews.getCoinNews);
router.get('/geteconomy', Cnews.getEconomyNews);

router.get('/getWords', Cnews.getWords);
router.get('/checkMyWord', Cnews.checkMyWord);
router.post('/saveMyWord', Cnews.saveMyWord);

module.exports = router;
