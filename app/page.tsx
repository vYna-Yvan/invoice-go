import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Bienvenue sur la page d'accueil
        </h1>
        <p className="mb-2 text-gray-700 text-center">
          Cette page est le point d'entrée de votre application.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <Link
            href="/invoices"
            className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
          >
            Voir les factures
          </Link>
          <Link
            href="/invoices/new"
            className="w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition"
          >
            Créer une facture
          </Link>
        </div>
      </div>
    </main>
  );
}