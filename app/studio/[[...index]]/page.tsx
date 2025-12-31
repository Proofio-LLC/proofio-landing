'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: '#f43f5e' }}>Sanity Studio Konfigurationsfehler</h1>
        <p>
          Bitte setze <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> in deinen Umgebungsvariablen.
        </p>
        <p style={{ marginTop: '1rem', padding: '1rem', background: '#f1f5f9', borderRadius: '4px' }}>
          <strong>Wichtig:</strong> Wenn du diesen Fehler auf einer Production-Domain siehst, 
          stelle sicher, dass die Domain in den CORS-Einstellungen deines Sanity-Projekts hinzugefügt wurde.
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}

