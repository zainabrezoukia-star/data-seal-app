const {
    storeMessage,
    getAndDeleteMessage
} = require('../modules/p3-messages');

const createMessage = (req, res) => {

    const { content } = req.body;

    const file = req.file ? req.file.filename : null;

    const type = file ? 'file' : 'text';

    const messageContent = file || content;

    const id = storeMessage(type, messageContent);

    res.json({
        success: true,
        id,
        link: `http://localhost:3000/api/messages/${id}`
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