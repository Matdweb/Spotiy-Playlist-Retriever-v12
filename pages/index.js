'use client'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import NotSignedIn from '../components/NotSignedIn';

export default function Home() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);

  const getUsersPlaylists = async () => {
    try {
      const response = await fetch('api/playlists')
      const { items } = await response.json();
      console.log(items);
      setPlaylists(items)
    } catch (e) {
      console.log(e);
    }
  }

  if (session) {
    return (
      <>
        Signed in as {session?.token?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => getUsersPlaylists()}>get playlists</button>
        {playlists.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.images[0]?.url} width="100" />
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      <NotSignedIn />
    </>
  );
}