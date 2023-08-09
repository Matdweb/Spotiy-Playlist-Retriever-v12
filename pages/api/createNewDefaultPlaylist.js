import { getAccessToken } from '../../lib/spotify/getAcessToken';
import getUserId from '../../lib/spotify/getUserId';
import { getSession } from "next-auth/react";


const createNewDefaultPlaylist = async (req, res) => {
    const session = await getSession({ req });
    const refresh_token = session.token.accessToken;
    const id = await getUserId(refresh_token);
    const access_token = await getAccessToken(refresh_token);
    const response = await fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "name": "New Playlist Spotify API",
            "description": "New playlist defualt description",
            "public": false
        })
    })
    const data = await response.json();

    return JSON.stringify(data);
}

export default createNewDefaultPlaylist;