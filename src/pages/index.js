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

  const images = [
    '/balloon.webp',
    '/cake.webp',
    '/gift.webp',
    '/party.webp',
    '/stars.webp',
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-purple-400 p-8 relative overflow-hidden">
      {/* Animated Pictures */}
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt="Birthday Decoration"
          className="absolute w-20 h-20"
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: [Math.random() * 50, Math.random() * 300],
            opacity: 1,
            x: [Math.random() * -200, Math.random() * 200],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            top: `${Math.random() * 20}vh`,
            left: `${Math.random() * 80}vw`,
          }}
        />
      ))}

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
