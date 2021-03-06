const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();

const PORT = config.get('port') || 5000;

app.use(express.json({extended: true}));

app.use('/api/auth', require('./routes/AuthRoute'));

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => { console.log(`Server has been started on port ${PORT}`) });
    } catch (err) {
        console.log('Server connection error', err.message);
        process.exit(1);
    }
}

start();

