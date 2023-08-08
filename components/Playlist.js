import React from 'react'
import styles from '../styles/components/Playlist.module.css'

function Playlist({ content }) {
    return (
        <div key={content.id} className={styles.father}>
            <h1 className='primary-title'>{content.name}</h1>
            <div className={styles.container}>
                <img className={styles.img} src={content.images[0]?.url} alt='Playlist image' />
                <div className={styles.playlistInfo} >
                    <label>Owner</label>
                    <p className={styles.txt}>{content?.owner.display_name}</p> <br />
                    <label>Description</label>
                    <p className={styles.txt}>{content?.playlist.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Playlist