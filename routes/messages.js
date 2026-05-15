const multer = require('multer');
const express = require('express');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const {
    createMessage,
    getMessage,
    deleteMessage
} = require('../controllers/messageController');

router.post('/create', upload.single('file'), createMessage);

router.get('/:id', getMessage);

router.delete('/:id', deleteMessage);

module.exports = router;