function tunnel() {
	window.location.assign(
		`https://10.10.10.9:8443/${window.location.host}${window.location.pathname}${window.location.search}`,
	);
}
