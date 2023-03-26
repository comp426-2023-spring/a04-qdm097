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


app.get('/app', (req, res) => {
	res.status(200).send("200 OK")
})

app.get('/app/rps', (req, res) => {
	res.status(200).send(JSON.stringify(rps()))
})

app.get('/app/rpsls', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls()))
})

// JSON params
app.get('/app/rps/play', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.query.shot)))
})

app.get('/app/rpsls/play', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.query.shot)))
})

// query params
app.get('/app/rps/play/:shot', (req, res) => {
	console.log("json body rps")
	console.log(req.body.shot)
	res.status(200).send(JSON.stringify(rps(req.body.shot)))
})

app.get('/app/rpsls/play/:shot', (req, res) => {
	console.log("json body rpsls")
	console.log(req.body.shot)
	res.status(200).send(JSON.stringify(rpsls(req.body.shot)))
})

// params
app.get('/app/rps/play/:shot', (req, res) => {
	console.log("param rps")
	console.log(req.params.shot)
	res.status(200).send(JSON.stringify(rps(req.params.shot)))
})

app.get('/app/rpsls/play/:shot', (req, res) => {
	console.log("param rpsls")
	console.log(req.params.shot)
	res.status(200).send(JSON.stringify(rpsls(req.params.shot)))
})


app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND')
})

app.listen(port, () => {
	console.log(`Runnning on port ${port}`)
})
