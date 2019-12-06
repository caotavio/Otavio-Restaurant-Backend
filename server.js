const express = require('express');
// const path = require('path');
const allowCors = require('./cors')

const app = express();
const distPath = __dirname + '/dist/';

app.use(express.static(distPath));
app.use(allowCors);

// app.get('/*', function(req,res) {   
//     res.sendFile(path.join(`${distPath}index.html`));
// });

app.listen(process.env.PORT || 4000);