import { getAccessToken } from '../../lib/spotify/getAcessToken';
import { getSession } from "next-auth/react";
import createNewDefaultPlaylist from './createNewDefaultPlaylist';


const addItemsToPlaylists = async (req, res) => {
    const response = await createNewDefaultPlaylist(req,res);
    const data = await JSON.parse(response);
    const playlist_id = data.id;
    
    const session = await getSession({ req });
    const refresh_token = session.token.accessToken;
    const access_token = await getAccessToken(refresh_token);

    const add = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "uris": ["spotify:track:1HNkqx9Ahdgi1Ixy2xkKkL"],
            "position": 0
        })
    })

    const addItem = await add.json();

    return res.status(200).json(addItem);
}

export default addItemsToPlaylists;