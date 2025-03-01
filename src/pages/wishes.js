// src/pages/wishes.js
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { TiktokEmbed } from '../components/TiktokEmbed';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function WishesPage() {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishes = async () => {
      const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching wishes:', error.message);
      } else {
        setWishes(data);
      }

      setLoading(false);
    };

    fetchWishes();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading wishes...</p>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-300 to-pink-400 p-8">
      {/* Birthday Person Image */}
      <div className="flex flex-col items-center mb-8">
      <h1 className="text-2xl mb-4 font-extrabold mt-4 text-center">🎉 Happy Birthday Brian Munyaka (Brayo)! 5 year Now 🎂</h1>
        <div className='flex justify-center gap-6'>
        <div className='flex justify-center gap-6'>
        <img
          src="/brayo1.jpg" // Ensure the image is in the /public folder
          alt="Birthday Person"
          className="w-60 h-60 object-cover  shadow-lg "
        />
        <img
          src="/brayo.jpg" // Ensure the image is in the /public folder
          alt="Birthday Person"
          className="w-60 h-60 object-cover  shadow-lg "
        />
        </div>
        </div>
        <h1 className="text-2xl font-extrabold mt-4 text-center">May This Day be filled with Joy, Love and Blessings that comes from the Most High God 🎂</h1>


        {/* Animated Decorations */}
  <div className="flex justify-center gap-6 mt-8 animate-bounce">
    <img
      src="/ballon.webp"
      alt="Balloons"
      className="w-32 h-32 object-contain animate-float"
    />
    <img
      src="/cake.webp"
      alt="Cake"
      className="w-32 h-32 object-contain animate-spin-slow"
    />
    <img
      src="/gift.webp"
      alt="Gift"
      className="w-32 h-32 object-contain animate-wiggle"
    />
    </div>

  </div>
  
  <TiktokEmbed />

      {/* Embedded YouTube Video */}
      <div className="flex justify-center mb-12">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ho08YLYDM88?autoplay=1&loop=1"
          title="Birthday Song"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Birthday Wishes */}
      <h2 className="text-4xl font-bold mb-8 text-center">🎁 Birthday Wishes 🎊</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wishes.length === 0 ? (
          <p className="text-center">No wishes yet. Be the first to send one!</p>
        ) : (
          wishes.map((wish) => (
            <div key={wish.id} className="bg-white shadow-md rounded-lg p-6">
              <p className="text-xl font-semibold">{wish.name}</p>
              <p className="text-gray-700">{wish.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(wish.created_at).toLocaleString('en-KE', {
                  timeZone: 'Africa/Nairobi',
                })}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
