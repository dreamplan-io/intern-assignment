import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/movies');
    });
  });
  return <div>Redirecting...</div>;
}
