import { getAccessToken } from "../../lib/spotify/getAcessToken";
import getUserId from '../../lib/spotify/getUserId';
import { getSession } from "next-auth/react";

const createNewPlaylist = async (req, res) => {
    const session = await getSession({ req });
    const refresh_token = session.token.accessToken;
    const { id, access_token } = await getUserId(refresh_token);
    const response = await fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "name": "New Playlist Spotify API",
            "description": "New playlist description",
            "public": false
        })
    })
    const data = await response.json();
    console.log(data);

    return res.status(200).json(data);
}



// exports.createPlaylist = function(name, token) {
//     return axios({
//         method: 'POST',
//         url: `https://api.spotify.com/v1/me/playlists`,
//         data: {
//             "name": name,
//             "description": "Playlist generated using singlespotify by Kabir Virji",
//             "public": true
//         },
//         headers: { 
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//         }})
//         .then(res => res.data)
// }


export default createNewPlaylist;