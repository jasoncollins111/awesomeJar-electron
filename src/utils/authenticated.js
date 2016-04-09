var firebaseUtils = require('./firebaseUtils');

function requireAuth(nextState, replace) {
  if (!firebaseUtils.isLoggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

module.exports = requireAuth;
