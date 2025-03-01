// src/components/WishForm.jsx
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export function WishForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return alert('Both fields are required.');

    setLoading(true);
    const { data, error } = await supabase
      .from('wishes')
      .insert([{ name, message }]);

    setLoading(false);

    if (error) {
      console.error('Error saving wish:', error.message);
      alert('Error saving wish. Try again.');
      return;
    }

    onSubmit({ name, message });
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-lg text-black">
      <h2 className="text-2xl font-bold mb-4">Send a Birthday Wish 🎉</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 border rounded bg-white text-black"
      />
      <textarea
        placeholder="Your Birthday Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 mb-4 border rounded bg-white text-black"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Wish'}
      </button>
    </form>
  );
}
