#!/usr/bin/env node

import minimist from 'minimist'

const args = minimist(process.argv.slice(2), {
	int: ['port']
})

// Some help from https://github.com/comp426-2023-spring/a04-sadieamato/blob/main/server.js
import express from 'express'
import {rps, rpsls} from './lib/rpsls.js'
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/app', function(req, res){
	res.status = 200
	res.send("200 OK")
})

app.get('/app/rps', function(req, res){
	res.status=200
	res.send(rps())
})

app.get('/app/rpsls', function(req, res){
	res.status=200
	res.send(rpsls())
})

app.get('/app/rps/play/:shot((paper)|(rock)|(scissors))', function(req, res){
	res.status=200
	res.send(rps(req.params.shot))
})

app.get('/app/rpsls/play/:shot((paper)|(rock)|(scissors)|(lizard)|(spock))', function(req, res){
	res.status=200
	res.send(rpsls(req.params.shot))
})


app.get('*', function(req, res){
	res.status=404
	res.send('404 NOT FOUND')
})

args['port'] ??= 5000
app.listen(args['port'])
