const express = require('express');
const cors = require('cors');

const {
    checkEmailBreach,
    checkPhoneBreach,
    checkPasswordBreach,
    checkCINBreach
} = require('./modules/p4-pwned');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/uploads', express.static('uploads'));

const messageRoutes = require('./routes/messages');

app.use('/api/messages', messageRoutes);

// ==============================
// CYBERSECURITY CHECK ROUTES
// ==============================

app.get('/check/email/:email', async (req, res) => {

    const result = await checkEmailBreach(req.params.email);

    res.json(result);
});

app.get('/check/phone/:phone', async (req, res) => {

    const result = await checkPhoneBreach(req.params.phone);

    res.json(result);
});

app.get('/check/password/:password', async (req, res) => {

    const result = await checkPasswordBreach(req.params.password);

    res.json(result);
});

app.get('/check/cin/:cin', async (req, res) => {

    const result = await checkCINBreach(req.params.cin);

    res.json(result);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});