// src/components/WishMessage.jsx
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export function WishMessage() {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch wishes from Supabase
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const { data, error } = await supabase
          .from('wishes')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        setWishes(data || []); // Ensure it's an array
      } catch (error) {
        console.error('Error fetching wishes:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, []);

  if (loading) return <p>Loading wishes...</p>;

  if (wishes.length === 0) return <p>No wishes yet. Be the first to send one!</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">🎉 Birthday Wishes 🎂</h2>

      {wishes.map((wish) => (
        <div key={wish.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <p className="text-xl font-semibold">{wish.name}</p>
          <p className="text-gray-700">{wish.message}</p>
          <p className="text-sm text-gray-500">{new Date(wish.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
