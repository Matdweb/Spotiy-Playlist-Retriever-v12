'use client'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import NotSignedIn from '../components/NotSignedIn';
import SignIn from '../components/SignIn'
import Playlist from '../components/Playlist'

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
        <span className='gray-txt' onClick={()=> setPlaylists([])}>Clean Page</span>
        {playlists.map((item) => (
          <Playlist content={item} />
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