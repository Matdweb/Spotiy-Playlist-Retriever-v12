# Spotify Playlist Retriever v12

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that retrives the playList or playLists of an authenticated user with the Spotify API

This is an experimental code. The purpose of this project is to test functionality for the development of a greater application
See here the main application: [Jamming](#);

Here you can take a look at the Figma prototype [Figma](https://www.figma.com/file/vC75e7Rda1IiLSC6SmKztR/Spotify-Playlists-Retriever-next_v12?type=design&node-id=0%3A1&mode=design&t=dveafw1P5ssLiuSS-1)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## More about this application's APIs

This app works with [`Next Auth`](https://next-auth.js.org/) for user autenthication

This app also has 2 API endpoints: `addItemsToPlaylists` & `playlists`

**addItemsToPlaylists**
This API endpoint uses the `createNewDefaultPlaylist` to create a new playlist in the user's account with no songs. Then, it makes a `POST` request with the new playlist's credentials and adds the `Blad Blood - Taylor Swift` and `Photograph - Ed Sheeran` songs to this new playlist created. 
In the app's layout after creating the playlist and adding the songs, it displays a message of success!

**playlist**
This API endpoint makes a `GET` request to Spotify API to retrieve a user's playlist. This info is handled as an array in the `Home` component and then displays in the layout with each song's name and description

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
