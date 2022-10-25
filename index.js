const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})



app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})