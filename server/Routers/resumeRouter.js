const Router = require('express');
const router = new Router();
const resumeController = require('../Controllers/resumeController');

router.post('/resume', resumeController.createResume);
router.get('/resume', resumeController.getResume);
router.get('/resume/:id', resumeController.getCurrentResume);

module.exports = router;
