import getCurrentEnvironment from 'src/utils/getCurrentEnvironment';

export default class BuyBuddySDK {
  constructor(config = {}) {
    this._config = config;
    this._env = getCurrentEnvironment();
  }
}
