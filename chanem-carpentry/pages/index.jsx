export default function Home() {
  return (
    <>
      <nav className="flex space-x-4 mb-6 p-4 bg-gray-100 w-full justify-center">
        <a href="/" className="text-blue-600 hover:underline">Home</a>
        <a href="/about" className="text-blue-600 hover:underline">About</a>
        <a href="/services" className="text-blue-600 hover:underline">Services</a>
        <a href="/gallery" className="text-blue-600 hover:underline">Gallery</a>
        <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
      </nav>

      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-gray-900">
        <h1 className="text-4xl font-bold mb-4">Chanem Carpentry - Custom Builds</h1>
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
    </>
  );
}
