import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="min-h-screen p-6 bg-white text-gray-900">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
