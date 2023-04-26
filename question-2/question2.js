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

// endpoint #2
app.get('/odd-num-hash', async (req, res) => {
    let hash = '';
    let lastChar = '';

    async function getHash() {
        const data = await axios.get(`http://localhost:${port}/hash`)
            .then((response) => {
                return response.data;
            })
        return data.hashString;
    }

    while (lastChar === '' || isNaN(lastChar) || lastChar % 2 === 0) {
        hash = await getHash();
        lastChar = hash.slice(-1);
    }
    res.json({ hash });
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})