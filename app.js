'use strict';

const express = require('express');
const {SharedCodeA} = require('shared-package');

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send(SharedCodeA.getMessage()));

app.listen(port, () => console.log(`App listening on port ${port}!`));
