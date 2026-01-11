import * as admin from "firebase-admin";

// Configuration for the main Firebase project
const mainFirebaseConfig = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

function getAdminApp() {
  const apps = admin.apps;
  if (apps.length > 0) {
    return apps[0]!;
  }

  // If we have explicit admin credentials, use them
  if (mainFirebaseConfig.projectId && mainFirebaseConfig.clientEmail && mainFirebaseConfig.privateKey) {
    return admin.initializeApp({
      credential: admin.credential.cert(mainFirebaseConfig as any),
    });
  }

  // Fallback for environments where Firebase Admin is pre-configured (like Vercel with some setups or local)
  return admin.initializeApp();
}

const app = getAdminApp();
export const db = admin.firestore(app);
export const supportDb = db; // For backward compatibility in this migration
export { admin as adminSdk };
