export default function getCurrentEnvironment() {
	const isNode = new Function("try {return this===global;}catch(e){return false;}")();

	/* istanbul ignore else */
	if (isNode) {
		return {
			name: 'node',
			platform: process.platform,
			pid: process.pid,
			version: process.version,
		};
	}

	/* istanbul ignore next */
	return {
		name: 'browser',
		userAgent: navigator.userAgent,
	};
}