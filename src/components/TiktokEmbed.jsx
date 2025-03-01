// src/components/TiktokEmbed.jsx
import { useEffect } from 'react';

export const TiktokEmbed = () => {
  useEffect(() => {
    // Ensure TikTok script loads on client side
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center my-8">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@ephanzzmutezz/video/7476770966354300166"
        data-video-id="7476770966354300166"
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a
            target="_blank"
            title="@ephanzzmutezz"
            href="https://www.tiktok.com/@ephanzzmutezz?refer=embed"
          >
            @ephanzzmutezz
          </a>
          <p>🎂 Happy Birthday Celebration! 🎉</p>
          <a
            target="_blank"
            title="♬ Happy Birthday - Jovanie"
            href="https://www.tiktok.com/music/Happy-Birthday-6684780595416926210?refer=embed"
          >
            ♬ Happy Birthday - Jovanie
          </a>
        </section>
      </blockquote>
    </div>
  );
};
