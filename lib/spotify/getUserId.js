import { getAccessToken } from "../../lib/spotify/getAcessToken"

const getUserId = async (refresh_token) => {
    const { access_token } = await getAccessToken(refresh_token);
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
    const user = await response.json();

    return { id: user.id, access_token};
};

export default getUserId;
