import * as admin from "firebase-admin";

const supportFirebaseConfig = {
  projectId: process.env.SUPPORT_FIREBASE_PROJECT_ID,
  clientEmail: process.env.SUPPORT_FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.SUPPORT_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

function getSupportAdminApp() {
  const adminAppNames = admin.apps.map(app => app?.name);
  
  if (adminAppNames.includes("support")) {
    return admin.app("support");
  }

  if (!supportFirebaseConfig.projectId || !supportFirebaseConfig.clientEmail || !supportFirebaseConfig.privateKey) {
    // If config is missing, we'll try to use the default app if it's already initialized
    // or return null to signal we can't connect yet.
    return null;
  }

  return admin.initializeApp(
    {
      credential: admin.credential.cert(supportFirebaseConfig),
    },
    "support"
  );
}

export const supportDb = getSupportAdminApp() ? admin.firestore(getSupportAdminApp()!) : null;
export { admin as adminSdk };

