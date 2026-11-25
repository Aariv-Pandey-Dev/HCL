/*
  Grocery Tracker — settings file.
  Fill these in from the setup guide. Keep the quotes and commas exactly as they are.
  These values are not secret (every web app ships them), but do restrict them as the guide explains.
*/
window.GT_CONFIG = {
  // Step 3 of the guide: Firebase console → Project settings → Your apps → Web app → "Config"
  firebase: {
    apiKey: "AIzaSyDa-9NiLcRT1PyYFsvdbP60u4KvxhzVAD4",
    authDomain: "hcl-grocery-tracker.firebaseapp.com",
    projectId: "hcl-grocery-tracker",
    storageBucket: "hcl-grocery-tracker.firebasestorage.app",
    messagingSenderId: "877707169019",
    appId: "1:877707169019:web:37cc78512b64de5741f45e"
  },

  // The Gemini model the AI assistant uses.
  geminiModel: "gemini-3.8-flash",

  // Used automatically if the main model is busy or times out. Set to "" to turn off.
  fallbackModel: "gemini-3.5-flash-lite",

  // reCAPTCHA Enterprise site key for Firebase App Check (made in Google Cloud).
  recaptchaSiteKey: "6Ld9jSkuAAAAALnvWQszKIIHCkmzzn9y1G4zkQeX",

  // Gmail import: Google Cloud → APIs & Services → Credentials → OAuth client ID (Web application).
  googleClientId: "877707169019-ags7i4u8krrj8qb691osm4hutpv75pi5.apps.googleusercontent.com"
};
