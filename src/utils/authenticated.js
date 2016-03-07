var firebaseUtils = require('./firebaseUtils');

function requireAuth(nextState, replace) {
  console.log('in require auth')
  if (!firebaseUtils.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

module.exports = requireAuth;
