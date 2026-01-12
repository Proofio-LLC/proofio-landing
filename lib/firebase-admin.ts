import * as admin from "firebase-admin";

// Configuration for the main Firebase project
const mainFirebaseConfig = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

function initializeAdmin() {
  if (admin.apps.length > 0) {
    return admin.apps[0]!;
  }

  // 1. Try service-account.json for local development
  if (process.env.NODE_ENV !== 'production') {
    try {
      const fs = require('fs');
      const path = require('path');
      const serviceAccountPath = path.resolve(process.cwd(), 'service-account.json');
      
      if (fs.existsSync(serviceAccountPath)) {
        const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
        return admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      }
    } catch (error) {
      // Ignore and try environment variables
    }
  }

  // 2. Try environment variables
  if (mainFirebaseConfig.projectId && mainFirebaseConfig.clientEmail && mainFirebaseConfig.privateKey) {
    return admin.initializeApp({
      credential: admin.credential.cert(mainFirebaseConfig as any),
    });
  }

  // If we are in production and reach here, it means variables are missing
  if (process.env.NODE_ENV === 'production') {
    const missing = [];
    if (!mainFirebaseConfig.projectId) missing.push("FIREBASE_ADMIN_PROJECT_ID");
    if (!mainFirebaseConfig.clientEmail) missing.push("FIREBASE_ADMIN_CLIENT_EMAIL");
    if (!mainFirebaseConfig.privateKey) missing.push("FIREBASE_ADMIN_PRIVATE_KEY");
    
    throw new Error(`Firebase Admin could not be initialized. Missing variables: ${missing.join(", ")}`);
  }

  // 3. Last resort: Automatic discovery (works on Google Cloud/Vercel with integration)
  try {
    return admin.initializeApp();
  } catch (error) {
    console.error("Firebase Admin could not be initialized automatically. Please set environment variables.");
    throw error;
  }
}

// Lazy initialization of Firestore
let _db: admin.firestore.Firestore | null = null;

export const getDb = () => {
  if (!_db) {
    const app = initializeAdmin();
    _db = admin.firestore(app);
  }
  return _db;
};

// Export Proxy for supportDb to ensure lazy initialization
export const supportDb = new Proxy({} as admin.firestore.Firestore, {
  get(_target, prop) {
    const instance = getDb();
    const value = (instance as any)[prop];
    return typeof value === 'function' ? value.bind(instance) : value;
  }
});

export const db = supportDb;
export { admin as adminSdk };
