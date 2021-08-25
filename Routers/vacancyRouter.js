const Router = require('express');
const vacancyController = require('../Controllers/vacancyController');
const router = new Router();

router.post('/vacancy', vacancyController.createVacancy);
router.post('/vacancy', vacancyController.deleteVacancy);
router.get('/vacancy', vacancyController.getVacancies);
router.post('/currentVacancy', vacancyController.getMoreCurrentVacancy);
router.get('/vacancy/favorite', vacancyController.getFavoriteVacancies);
router.post('/vacancy/favorite', vacancyController.changeFavoriteVacancies);
router.get('/vacancy/:id', vacancyController.getCurrentVacancy);

module.exports = router;
