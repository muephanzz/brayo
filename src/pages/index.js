// src/pages/index.js
import { useState } from 'react';
import { WishForm } from '../components/WishForm';
import { WishMessage } from '../components/WishMessage';
import Link from 'next/link';

export default function Home() {
  const [wish, setWish] = useState(null);

  const handleWishSubmit = (newWish) => {
    setWish(newWish);
  };


  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-purple-400 p-8 relative overflow-hidden">
      {/* Main Content */}
      <h1 className="text-2xl mb-4 font-extrabold mt-4 text-center">Hello! This is Ephantus Mutembei. Help me wish Brayo a Happy Birthday 🎂</h1>
      {!wish ? (
        <WishForm onSubmit={handleWishSubmit} />
      ) : (
        <WishMessage wish={wish} />
      )}

      <Link href="/wishes" className="mt-4 text-white underline">
        View All Wishes
      </Link>
    </main>
  );
}
