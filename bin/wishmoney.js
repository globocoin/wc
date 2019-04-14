#!/usr/bin/env node
const wishmoney = require('./../lib/wishmoney');

const argv = require('yargs')
    .usage('Usage: $0 [options]')
    .alias('a', 'host')
    .describe('a', 'Host address. (localhost by default)')
    .alias('p', 'port')
    .describe('p', 'HTTP port. (3001 by default)')
    .alias('l', 'log-level')
    .describe('l', 'Log level (7=dir, debug, time and trace; 6=log and info; 4=warn; 3=error, assert; 6 by default).')
    .describe('peers', 'Peers list.')
    .describe('name', 'Node name/identifier.')
    .array('peers')
    .help('h')
    .alias('h', 'help')
    .argv;
	
	
var peer=['http://149.28.199.86:3001'];

peer.push('http://66.42.40.223:3001'); 

peer.push('http://207.246.65.27:3001'); 

peer.push('http://140.82.55.30:3001'); 

peer.push('http://95.179.231.166:3001'); 

peer.push('http://144.202.73.42:3001'); 

peer.push('http://149.28.118.135:3001'); 

peer.push('http://149.28.119.77:3001'); 

peer.push('http://149.28.174.196:3001'); 

peer.push('http://45.77.141.5:3001'); 

 

wishmoney("0.0.0.0","3001", peer, argv.logLevel, argv.name);