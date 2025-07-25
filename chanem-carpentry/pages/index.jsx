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
<nav className="flex space-x-4 mb-6">
  <a href="/" className="text-blue-600 hover:underline">Home</a>
  <a href="/about" className="text-blue-600 hover:underline">About</a>
  <a href="/services" className="text-blue-600 hover:underline">Services</a>
  <a href="/gallery" className="text-blue-600 hover:underline">Gallery</a>
  <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
</nav>
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-4xl font-bold">High-Quality Craftsmanship</h2>
      <p className="max-w-xl text-lg">
        Custom woodwork and reliable service across Western Canada. Trust Chanem Carpentry for your next project.
      </p>
      <a
        href="/contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Get a Quote
      </a>
    </div>
  );
}
