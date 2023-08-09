'use client'
import { useState } from 'react'
import styles from '../styles/components/NewPlaylist.module.css'
import Modal from './Modal'

function NewPlaylistMessage({ content }) {
    const [modal,setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

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
            <span onClick={()=> toggleModal()} className='gray-txt'>See Songs</span>

            {/* Modal message */}
            { modal ? <Modal toggleModal={toggleModal} /> : ''}
        </div>
    )
}

export default NewPlaylistMessage