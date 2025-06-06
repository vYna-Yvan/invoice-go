import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-black">
          <p>Invoice<span className="text-blue-600">GO</span></p>
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Accueil
          </Link>
          <Link href="/invoices" className="text-gray-700 hover:text-blue-600 transition">
            Factures
          </Link>
          <Link href="/invoices/new" className="text-gray-700 hover:text-blue-600 transition">
            Nouvelle facture
          </Link>
        </div>
      </nav>
    </header>
  );
}