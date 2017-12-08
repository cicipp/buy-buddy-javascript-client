import injectScopeValidator from 'utils/injectScopeValidator';

/**
 * fetchUser(user, object, [...options])
 *
 * Fetches a user from the platform by given query parameters.
 */
async function fetchUser(user, object) {
  
}

export default injectScopeValidator(fetchUser, ['personalInformation']);
