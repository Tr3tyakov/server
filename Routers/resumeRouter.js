const Router = require('express');
const router = new Router();
const path = require('path');
const resumeController = require(path.join(__dirname, '../Controllers/resumeController'));

router.post('/resume', resumeController.createResume);
router.get('/resume', resumeController.getResume);
router.get('/resume/:id', resumeController.getCurrentResume);

module.exports = router;
