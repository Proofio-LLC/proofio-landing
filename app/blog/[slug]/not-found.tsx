import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-base-content mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-base-content mb-4">
          Blog Post nicht gefunden
        </h2>
        <p className="text-base-content/70 mb-8">
          Der gesuchte Blog-Post existiert nicht oder wurde entfernt.
        </p>
        <Link
          href="/#blog"
          className="btn btn-primary btn-lg inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Blog
        </Link>
      </div>
    </div>
  );
}

