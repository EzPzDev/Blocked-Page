async function tester() {
	const url = 'https://monitor.clickcease.com/tracker/tracker.aspx?id=tBFwgFsE7BdPWV&adpos=&locphisical=9028722&locinterest=&adgrp=&kw=&nw=x&url=https://theheliusshop.com/products/helius-sight-2?wickedsource=google&wv=3.1&gad=1&cpn=20192538450&device=c&ccpturl=theheliusshop.com&pl=';
	var new_url = url;
	const response = await fetch('../data/filters.json');
	const jsonData = await response.json();

	// const filter = [/\n/, /.*url=/, /.*INT%26u%3D/, /.*&u=/, /.*urllink=/];
	const filter = jsonData.map(item => item = new RegExp(item));
	for (const list of filter) {
		var new_url = new_url.replace(list, "");
	}

	const decode = decodeURIComponent(new_url);
	if (/2F/.test(decode)) {
		var decodeAgain = decodeURIComponent(decode);
		var decoded = decodeAgain;
	} else {
		var decoded = decode;
	}
	// if (/cid=/.test(decoded)) {
	if (/\?/.test(decoded)) {
		var clean = decoded.replace(/\?.*/g, "");
	} else {
		var clean = decoded;
	}
	if (/http/.test(clean)) {
		var cleaned = clean;
	} else {
		var cleaned = 'http://' + clean;
	}

	console.log(cleaned);
	console.log('Array? ' + Array.isArray(filter));
	console.log(clean);
}
