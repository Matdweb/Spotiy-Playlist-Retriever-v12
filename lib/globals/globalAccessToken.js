
let accessToken = null;

export const setGlobalToken = (newToken) => {
    accessToken = newToken;
}

export const getGlobalToken = () => {
    return accessToken;
}