import { useState } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-gray-100 p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded border"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded border"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded border"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
