"use client";
import { handleGoogleAuth } from '@/actions/actions';
import { clientStates } from '@/state/clientState';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SearchP() {
  // Always call hooks unconditionally
  const token = clientStates.token.get();

  // Get search params and the auth code from the URL
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code');

  useEffect(() => {
    const handleResponse = async () => {
      if (authCode) {
        const result = await handleGoogleAuth(authCode);
        clientStates.token.set(result.idToken); // Save the token in state
      }
    };

    handleResponse(); // Call the async function inside useEffect
  }, [authCode]); // Dependency array ensures it only runs when authCode changes

  // Render nothing if token exists
  // if (token) {
  //   return null;
  // }

  return null; // Render nothing if the token doesn't exist
}
