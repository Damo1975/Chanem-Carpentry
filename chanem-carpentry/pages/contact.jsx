export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Chanem Carpentry</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        High-quality craftsmanship, custom woodwork, and reliable service across Western Canada.
      </p>
      <a
        href="/contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Get a Quote
      </a>
    </main>
  );
}
