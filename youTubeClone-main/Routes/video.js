const express = require('express');
const router = express.Router();
const videoController = require('../Controllers/video');
const auth = require('../middleware/authentication');

router.post('/video',auth,videoController.uploadVideo);
router.get('/allVideo',videoController.getAllVideo);
router.get('/getVideoById/:id',videoController.getVideoById);
router.get('/:userId/channel',videoController.getAllVideoByUserID);


module.exports = router;