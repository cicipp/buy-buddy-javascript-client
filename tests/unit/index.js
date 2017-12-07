import BuyBuddySDK from 'src';

describe('Outlets', () => {
  describe('class initializer', () => {
    it('should save config to "_config" property', () => {
      const config = { foo: 'bar' };
      const sdk = new BuyBuddySDK(config);

      expect(config).to.deep.equal(sdk._config);
    });

    it('should save default config to "_config" property', () => {
      const sdk = new BuyBuddySDK();

      expect(sdk._config).to.deep.equal({});
    });
  });
});
