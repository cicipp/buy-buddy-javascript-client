import { spy } from 'sinon';

import injectScopeValidator from 'src/utils/injectScopeValidator';

//  The default scopes provided to the injector
const defaultScopes = ['another', 'wombat'];
const allScope = ['all'];
const validScope = ['another'];
const invalidScope = ['catdog'];

describe('injectScopeValidator', () => {
  describe('scope argument as array', () => {
    it('should noop if scope arguments of provided function is valid', () => {
      const func = spy();
      const wrappedFunc = injectScopeValidator(func, defaultScopes);

      expect(() => {
        wrappedFunc(1, validScope);
      }).to.not.throw();
    });

    it('should throw error if there is an unsupported scope argument', () => {
      const func = spy();
      const wrappedFunc = injectScopeValidator(func, defaultScopes);

      expect(() => {
        wrappedFunc(1, invalidScope);
      }).to.throw();
    });

    it('should throw error if scope argument is empty array', () => {
      const func = spy();
      const wrappedFunc = injectScopeValidator(func, defaultScopes);

      expect(() => {
        wrappedFunc(1, []);
      }).to.throw();
    });

    it('should not throw error if scope argument is all but it had not been provided', () => {
      const func = spy();
      const wrappedFunc = injectScopeValidator(func, defaultScopes);

      expect(() => {
        wrappedFunc(1, allScope);
      }).to.not.throw();
    });
  });

  describe('scope argument as a string', () => {
    it('should noop if scope argument is valid', () => {
      const func = spy();
      const wrappedFunc = injectScopeValidator(func, defaultScopes);

      expect(() => {
        wrappedFunc(1, validScope[0]);
      }).to.not.throw();
    });

    it('should throw error if scope argument is unsupported', () => {
      const func = spy();
      const wrappedFunc = injectScopeValidator(func, defaultScopes);

      expect(() => {
        wrappedFunc(1, invalidScope[0]);
      }).to.throw();
    });

    it('should throw error if empty string is provided as a scope', () => {
      const func = spy();
      const wrappedFunc = injectScopeValidator(func, defaultScopes);

      expect(() => {
        wrappedFunc(1, '');
      }).to.throw();
    });
  });

  it('should throw error if scope argument is not an array or string', () => {
    const func = spy();
    const wrappedFunc = injectScopeValidator(func, defaultScopes);

    expect(() => {
      /* eslint-disable no-new-object */
      wrappedFunc(1, new Object({}));
      /* eslint-enable no-new-object */
    }).to.throw(TypeError);
  });
});
