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

  // The Gemini model the AI assistant uses. gemini-3.5-flash is stable until at least May 2027.
  geminiModel: "gemini-3.5-flash",

  // Step 3 (optional but recommended): reCAPTCHA v3 site key for Firebase App Check. Leave "" to skip.
  recaptchaSiteKey: "",

  // Step 4: Google Cloud → APIs & Services → Credentials → OAuth client ID (Web application). Leave "" to hide email import.
  googleClientId: ""
};
