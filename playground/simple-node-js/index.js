/* eslint-disable header/header */

function main() {
	console.log('Hello world!');

	if (1 == 1) { // eslint(eqeqeq) warning
		console.log('1 equals 1');
	}

	const unused = 'foo';

	debugger;
}

main();
