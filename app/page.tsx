import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Bienvenue sur <span className="text-blue-600">InvoiceGo</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Suivez et gérez vos factures rapidement grâce à une interface claire et des données en temps réel.
        </p>
      </div>
    </main>
  );
}

/** <div className="flex flex-col gap-4 mt-6">
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
        </div>*/