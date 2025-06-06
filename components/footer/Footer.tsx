export default function Footer() {
  return (
    <footer className="w-full bg-white shadow mt-8">
      <div className="container mx-auto py-4 px-6 flex justify-center">
        <span className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MonApp. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}