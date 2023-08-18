'use client'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import NotSignedIn from '../components/NotSignedIn';
import SignIn from '../components/SignIn'
import Playlist from '../components/Playlist'
import NewPlaylistMessage from '../components/NewPlaylistMessage';

export default function Home() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistCreated, setNewPlaylistCreated] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({});

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
  
  const createNewPlaylist = async () => {
    try {
      const res = await fetch('api/addItemsToPlaylists');
      const data = await res.json();
      setNewPlaylist(data);
    } catch (e) {
      console.log(e);
    }
  }

  const handleCreateNewPlaylist = async () => {
    await createNewPlaylist();
    setNewPlaylistCreated(true);
  }
  
  const toggleCleanPage = () => {
    setPlaylists([]);
    setNewPlaylistCreated(false);
  }

  if (session) {
    return (
      <>
        <SignIn />
        <button className='btn-primary' onClick={() => getUsersPlaylists()}>Get my playlists</button>
        <button className='btn-primary' onClick={() => handleCreateNewPlaylist()}>Create a new Playlists</button>

        <span className='gray-txt' onClick={() => toggleCleanPage()}>Clean Page</span>

        {newPlaylistCreated ? <NewPlaylistMessage content={newPlaylist} /> : ''}

        {playlists.map((item) => (
          <Playlist key={item.id} content={item} />
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