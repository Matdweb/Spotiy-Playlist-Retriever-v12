import styles from '../styles/components/NewPlaylist.module.css'

function NewPlaylistMessage({ content }) {
    return (
        <div key={content?.playlist.id}>
            <div className={styles.father}>
                <h1 className='primary-title'>New Playlist created</h1>
                <div className={styles.container}>
                    <label>Name</label>
                    <p>{content?.playlist.name}</p> <br />
                    <label>Description</label>
                    <p>{content?.playlist.description}</p>
                </div>
            </div>
            <span className='gray-txt'>See Songs</span>
        </div>
    )
}

export default NewPlaylistMessage