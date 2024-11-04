// generate-env.js
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const envConfig = `
export const environment = {
  production: false,
  url: '${process.env.DEV_URL}',
  firebase: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}',
    measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}',
  },
};
`;

const prodEnvConfig = `
export const environment = {
  production: true,
  url: '${process.env.PROD_URL}',
  firebase: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}',
    measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}',
  },
};
`;

fs.writeFileSync('src/environments/environment.ts', envConfig);
fs.writeFileSync('src/environments/environment.prod.ts', prodEnvConfig);
console.log('Environment files generated successfully.');