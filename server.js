const http = require('http');
const express = require('express');
const hostname = '172.0.0.1'
const port = 3001;
var requestListener= function(req,res){
    res.setheader('context-type','text/plain');
    console.log('connected');
}
const server = http.createServer(requestListener);
server.listen(port);