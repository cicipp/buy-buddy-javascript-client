export default function getCurrentEnvironment() {
  /* eslint-disable no-new-func */
  const isNode = new Function('try {return this===global;}catch(e){return false;}')();
  /* eslint-enable no-new-func */

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
