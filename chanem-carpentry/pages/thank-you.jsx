import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="mb-6 text-center max-w-md">
        Your message has been sent. We'll get back to you as soon as possible.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
