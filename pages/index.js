'use client'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import NotSignedIn from '../components/NotSignedIn';
import SignIn from '../components/SignIn'

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
        <SignIn />
        <button className='btn-primary' onClick={() => getUsersPlaylists()}>Get my playlists</button>
        <button className='btn-primary' onClick={''}>Create a new Playlists</button>
        <span className='gray-txt'>Clean Page</span>
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