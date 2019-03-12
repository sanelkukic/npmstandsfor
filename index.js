#!/usr/bin/env node
const axios = require('axios');

const __version__ = "1.0.3";
const __author__ = "xDrixxyz";
const __issues__ = "https://github.com/xDrixxyz/npmstandsfor/issues";

if (process.argv.indexOf('--help') > -1 || process.argv.indexOf('-h') > -1) {
	console.log(`npmstandsfor version ${__version__}`);
	console.log(`Developed by ${__author__}`);
	console.log('\n');
	console.log('Help:');
	console.log("It's very simple! Just run `npmstandsfor` without any arguments and you will get a random saying from the official sayings list (https://github.com/npm/npm-expansions)");
	console.log('\n');
	console.log(`You can report issues to: ${__issues__}`);
	process.exit(0);
} else {

	var sayings_url = 'https://raw.githubusercontent.com/npm/npm-expansions/master/expansions.txt';

	try {
		axios.get(sayings_url).then(function(resp) {
			var available_sayings = resp.data;
			var sayings = available_sayings.split('\n');
			var random_saying = sayings[Math.floor(Math.random() * sayings.length)];
			console.log(`npm stands for: ${random_saying}`);
		});
	} catch (e) {
		console.log('There was an issue getting a saying.\n');
		console.log(`You can report this issue to: ${__issues__}`);
		console.log('\nMake sure you provide the following stack trace');
		console.log(e.stack);
		process.exit(1);
	}
}
