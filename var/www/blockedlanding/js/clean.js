async function clean() {
	const url = window.location.href;
	var new_url = url;
	// const response = await fetch('../data/filters.json');
	const response = await fetch('https://raw.githubusercontent.com/EzPzDev/Blocked-Page/master/filters.json');
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

	// alert(cleaned);
	window.location.assign(cleaned);
}
