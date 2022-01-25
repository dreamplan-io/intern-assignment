import React from 'react';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <header className="sticky bg-[#040714] top-0 flex justify-between items-center h-20 px-10 z-[1000]">
      <h1
        className="text-white font-headerFont text-3xl cursor-pointer"
        onClick={() => router.push('/')}
      >
        My Cool Movies App
      </h1>
      <nav>
        <button
          className="fav"
          onClick={() => router.push('/favorites')}
        >
          Favorites
        </button>
      </nav>
    </header>
  );
}

export default Header;
