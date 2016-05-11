#!/usr/bin/env node
'use strict';
const meow = require('meow');
const websitePopup = require('website-popup');

const cli = meow(`
	Usage
	  $ website-popup <url> [--size=<size>]

	Example
	  $ website-popup https://sindresorhus.com --size=600x400
`);

if (cli.input.length === 0) {
	console.error('Specify a URL');
	process.exit(1);
}

const opts = {};

if (cli.flags.size) {
	const parts = cli.flags.size.split('x');
	opts.width = parts[0];
	opts.height = parts[1];
}

websitePopup(cli.input[0], opts);
