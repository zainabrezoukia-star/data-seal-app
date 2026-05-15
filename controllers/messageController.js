const {
    storeMessage,
    getAndDeleteMessage
} = require('../modules/p3-messages');

const createMessage = (req, res) => {

    const { content } = req.body;

    let type = 'text';
    let messageContent = content;

    if (req.file) {

        const mimeType = req.file.mimetype;

        if (mimeType.startsWith('image/')) {
            type = 'image';

        } else if (mimeType.startsWith('video/')) {
            type = 'video';

        } else if (mimeType.startsWith('audio/')) {
            type = 'audio';

        } else if (mimeType === 'application/pdf') {
            type = 'pdf';

        } else {
            type = 'file';
        }

        messageContent = `/uploads/${req.file.filename}`;
    }

    const id = storeMessage(type, messageContent);

    res.json({
        success: true,
        id,
        link: `${req.protocol}://${req.get('host')}/receive.html?id=${id}`
    });
};

const getMessage = (req, res) => {

    const { id } = req.params;

    const message = getAndDeleteMessage(id);

    if (!message) {

        return res.status(404).json({
            error: 'Message not found or expired'
        });
    }

    res.json(message);
};

const deleteMessage = (req, res) => {

    res.json({
        success: true
    });
};

module.exports = {
    createMessage,
    getMessage,
    deleteMessage
};