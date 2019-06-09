import compression from 'compression';
import * as sapper from '@sapper/server';
const express       = require('express');
const app = express();

app.use(express.static('static'),
		compression({ threshold: 0 }),
		sapper.middleware()); 

const appPort = 3000;

app.listen(process.env.PORT || appPort, () => {
	console.info('We are up!');
	});