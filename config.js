// Fill these in during setup (see README.md, step 5).
// Neither value is a secret: the Client ID is public by design, and the server
// only accepts requests from signed-in @farbrook.org accounts.
window.CONFIG = {
  // Apps Script → Deploy → Web app URL (ends in /exec)
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzUtIcOToJYcXIW77EALhiE4D706x6rWG5CjpQsugGUZLRwUsmHXeZcA9k-yPJ2GZ1T/exec",
  // Google Cloud → Credentials → OAuth client ID (ends in .apps.googleusercontent.com)
  GOOGLE_CLIENT_ID: "P819368299780-q2qtj1ojfukt7ge0509qg9pcvnpsjkaf.apps.googleusercontent.com",
  // Only accounts from this domain can sign in
  ALLOWED_DOMAIN: "farbrook.org",
};
