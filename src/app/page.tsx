'use client';

import { NeynarAuthButton, useNeynarContext } from '@neynar/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const { user } = useNeynarContext();
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    const last = localStorage.getItem('lastCheckDate');
    const saved = parseInt(localStorage.getItem('streak') || '0');
    const today = new Date().toDateString();
    setStreak(last === today ? saved : 0);
  }, []);

  const handleCheckIn = () => {
    const today = new Date().toDateString();
    const newStreak = streak + 1;
    localStorage.setItem('lastCheckDate', today);
    localStorage.setItem('streak', newStreak.toString());
    setStreak(newStreak);
    alert(`✅ Checked in! Current streak: ${newStreak}`);
    
    // Optional: send a cast automatically using Neynar API later
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {!user ? (
        <NeynarAuthButton label="Connect Farcaster" />
      ) : (
        <>
          <p>Hello, {user.displayName || user.fid} 👋</p>
          <p>🔥 Current streak: {streak} day(s)</p>
          <button onClick={handleCheckIn}>✅ Check In</button>
        </>
      )}
    </main>
  );
}
