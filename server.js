#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// Some help from https://github.com/comp426-2023-spring/a04-sadieamato/blob/main/server.js

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
});

app.get('/app/rps', (req, res) => {
	res.status(200).send(rps());
});

app.get('/app/rpsls', (req, res) => {
	res.status(200).send(rpsls());
});

// url encoding params
app.get('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.query.shot));
});

app.get('/app/rpsls/play', (req, res) => {
	res.status(200).send(rpsls(req.query.shot));
});

// json params
app.get('/app/rps/play', (req, res) => {
	console.log("json body rps");
	var tst = rps(req.body.shot);
	console.log(JSON.stringify(tst));
	res.status(200).send(rps(req.body.shot));
});

app.get('/app/rpsls/play', (req, res) => {
	console.log("json body rpsls");
	var tst = rpsls(req.body.shot);
	console.log(JSON.stringify(tst));
	res.status(200).send(tst);
});

// params
app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(rps(req.params.shot));
});

app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(rpsls(req.params.shot));
});


app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
});

app.listen(port, () => {
	console.log(`Runnning on port ${port}`);
});
