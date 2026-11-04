/*
  Grocery Tracker — settings file.
  Fill these in from the setup guide. Keep the quotes and commas exactly as they are.
  These values are not secret (every web app ships them), but do restrict them as the guide explains.
*/
window.GT_CONFIG = {
  // Step 3 of the guide: Firebase console → Project settings → Your apps → Web app → "Config"
  firebase: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "PASTE_SENDER_ID",
    appId: "PASTE_APP_ID"
  },

  // The Gemini model the AI assistant uses. gemini-3.5-flash is stable until at least May 2027.
  geminiModel: "gemini-3.5-flash",

  // Step 3 (optional but recommended): reCAPTCHA v3 site key for Firebase App Check. Leave "" to skip.
  recaptchaSiteKey: "",

  // Step 4: Google Cloud → APIs & Services → Credentials → OAuth client ID (Web application). Leave "" to hide email import.
  googleClientId: ""
};
