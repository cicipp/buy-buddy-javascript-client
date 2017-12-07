describe('Global reference to BuyBuddySDK', () => {
  it('should be defined', () => {
    expect(BuyBuddySDK).to.not.be.undefined;
  });
});

describe('BuyBuddySDK', () => {
  it('should fetch environment properties during initialization', () => {
  	const sdk = new BuyBuddySDK();

  	expect(sdk._env).to.not.be.undefined;
  });
});
