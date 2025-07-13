# Chanem-Carpentry
git add .
git commit -m "Final domain and content updates"
git push origin main
https://chanemcarpentry.ca
{
  "name": "chanem-carpentry",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "latest",
    "lucide-react": "latest",
    "tailwindcss": "latest"
  }
}

// next.config.js
module.exports = {
  reactStrictMode: true,
}

// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /pages/index.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Hammer, Ruler, Saw } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-6 bg-yellow-600 text-white shadow-lg">
        <h1 className="text-4xl font-bold">Chanem Carpentry</h1>
        <p className="text-lg mt-2">Precision. Craftsmanship. Integrity.</p>
      </header>

      <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-6 text-center">
              <Hammer className="mx-auto mb-4 w-12 h-12 text-yellow-600" />
              <h2 className="text-xl font-semibold mb-2">Custom Carpentry</h2>
              <p>We bring your vision to life with attention to detail and quality materials.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-6 text-center">
              <Ruler className="mx-auto mb-4 w-12 h-12 text-yellow-600" />
              <h2 className="text-xl font-semibold mb-2">Design & Build</h2>
              <p>We collaborate from design to final product, ensuring each project reflects your needs.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-6 text-center">
              <Saw className="mx-auto mb-4 w-12 h-12 text-yellow-600" />
              <h2 className="text-xl font-semibold mb-2">Renovations</h2>
              <p>Expert renovations from kitchens to complete remodels.</p>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/CustomSauna.jpg" alt="Custom Sauna Project" className="rounded-lg shadow-lg object-cover h-64 w-full" />
          <img src="/images/Gazebo.jpg" alt="Custom Gazebo Project" className="rounded-lg shadow-lg object-cover h-64 w-full" />
        </div>
      </section>

      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form action="https://formsubmit.co/el/hokimi" method="POST" className="max-w-md mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded w-full" />
          <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded w-full" />
          <textarea name="message" placeholder="Your Message" required className="border p-2 rounded w-full"></textarea>

          <input type="hidden" name="_subject" value="New message from Chanem Carpentry website" />
          <input type="hidden" name="_next" value="https://chanemcarpentry.ca/thank-you" />

          <button type="submit" className="bg-yellow-600 text-white rounded px-4 py-2">Send Message</button>
        </form>
      </section>

      <footer className="p-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Chanem Carpentry. All rights reserved.</p>
        <p>Contact us: info@chanemcarpentry.ca | (123) 456-7890</p>
      </footer>
    </div>
  );
}

// /pages/thank-you.jsx
export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-6">We’ve received your message and will get back to you shortly.</p>
      <a href="/" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg">Back to Home</a>
    </div>
  );
}



