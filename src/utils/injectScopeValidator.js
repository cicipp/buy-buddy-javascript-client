import _ from 'lodash';

class InvalidScopeError extends Error { }

/**
 * Injects a validator routine for given scopes. Scope `'all'` would be
 * included as a default to contain all of the scopes.
 *
 * `injectScopeValidator(fetchUsers, ['some', 'valid', 'scope', 'values'])`
 *
 * @throws InvalidScopeError
 * @throws TypeError
 */
export default function injectScopeValidator(fn, scopes) {
  if (scopes.indexOf('all') === -1) {
    scopes.push('all');
  }

  return function () {
    let providedScopes = arguments[arguments.length - 1];

    if (providedScopes === '') {
      throw new InvalidScopeError('no scope element provided');
    } else if (_.isString(providedScopes)) {
      providedScopes = [providedScopes];
    } else if (!_.isArray(providedScopes)) {
      throw new TypeError('scope is not a string or array');
    } else if (providedScopes.length === 0) {
      throw new InvalidScopeError('no scope element provided');
    }

    providedScopes
    .map(el => {
      return el.trim();
    })
    .some(el => {
      if (scopes.indexOf(el) === -1) {
        throw new InvalidScopeError(`scope element ${el} is not supported`);
      }
    });
  };
}
