// Include on every protected page, after auth.js. Redirects to sign-in if
// there's no active session.
(function () {
  if (!Auth.isLoggedIn()) {
    const next = encodeURIComponent(window.location.pathname.replace(/^\//, "") + window.location.search);
    window.location.href = "login?next=" + next;
  }
})();
