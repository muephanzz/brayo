// src/pages/index.js
import { useState } from 'react';
import { motion } from 'framer-motion';
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
