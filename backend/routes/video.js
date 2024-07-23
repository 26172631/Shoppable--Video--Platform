const express = require('express');
const { getVideoMeta, createVideo } = require('../controller/video');
const router = express.Router()

router.get("/metadata",getVideoMeta)
router.post("/createvideo",createVideo)
module.exports = router