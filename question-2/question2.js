import express from 'express';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('API is running ...');
})

// endpoint #1
app.get('/hash', (req, res) => {
    // create a random SHA256 hash string
    const randString = Math.random().toString(36).substring(2, 8);
    const hashString = CryptoJS.SHA256(randString).toString();
    console.log(hashString)

    // delay response output by 1 second
    const delayResponse = 1_000;

    setTimeout(() => {
        res.json({ hashString });
    }, delayResponse)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})