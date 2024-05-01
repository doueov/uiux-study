const express = require('express');
const cors = require('cores');
const app = express();

app.use(cors({
    origin : "http://http://localhost:3003/",
    Credentials : true
}));

app.get('/', (req, res) => {
    const jsonData = new Array();
    jsonData.push({ "name": "solhee" });
    jsonData.push({ "name": "minseo" });
    jsonData.push({ "name": "jisul" });
    res.send(jsonData);
});

app.post('/', (req, res) => {
    const jsonData = new Array();
    jsonData.push({ "apple": "iPhon" });
    jsonData.push({ "apple": "iPad" });
    jsonData.push({ "apple": "MacBook" });
    res.send(jsonData);
});

app.listen(3003);