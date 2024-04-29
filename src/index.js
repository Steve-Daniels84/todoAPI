const express = require('express');

const api = express ();
api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
    console.log('api running')
});

api.post('/add', (req, res) => {
    res.send('it works');
})