#!/usr/bin/env node

import minimist from 'minimist'
import express from 'express'
import {rps, rpsls} from './lib/rpsls.js'

const args = minimist(process.argv.slice(2))
const port = args.port || 5000

// Some help from https://github.com/comp426-2023-spring/a04-sadieamato/blob/main/server.js

const app = express()
app.use(express.json())
//app.use(express.urlencoded({extended:true}))

var i = 0

app.get('/app', (req, res) => {
	res.status(200).send("200 OK")
})
console.log(i); i++;

app.get('/app/rps', (req, res) => {
	res.status(200).send(JSON.stringify(rps()))
})
console.log(i); i++;

app.get('/app/rpsls', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls()))
})
console.log(i); i++;

// JSON params
app.get('/app/rps/play', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.query.shot)))
})
console.log(i); i++;

app.get('/app/rpsls/play', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.query.shot)))
})
console.log(i); i++;

// query params
app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.body.shot)))
})
console.log(i); i++;

app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.body.shot)))
})
console.log(i); i++;

// params
app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.params.shot)))
})
console.log(i); i++;

app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.params.shot)))
})
console.log(i); i++;


app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND')
})
console.log(i); i++;

app.listen(port, () => {
	console.log(`Runnning on port ${port}`)
})
console.log(i); i++;
