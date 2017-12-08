import getCurrentEnvironment from 'src/utils/getCurrentEnvironment';

describe('getCurrentEnvironment', () => {
  it('should return environment as node', () => {
    const env = getCurrentEnvironment();

    expect(env.name).to.be.equal('node');
    expect(env.platform).to.exist;
    expect(env.pid).to.exist;
    expect(env.version).to.exist;
  });
});
