import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 shadow p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">Chanem Carpentry</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
