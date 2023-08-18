import styles from '../styles/components/Modal.module.css'

function Modal({ toggleModal }) {

    const defaultSongs = [{
        id: 0,
        artist: "Ed Sheeran",
        song: "Photograph"
    }, {
        id: 1,
        artist: "Taylor Swift",
        song: "Bad Love"
    }];

    return (
        <div onClick={() => toggleModal()} className={styles.father}>
            <div className={styles.modal} >
                <h1 className={styles.title + " primary-title"}>Important</h1>
                <p className={styles.message}>This is just an experimental app so you
                    can’t choose the songs in your new playlists</p>

                <p>For now your playlists has this songs:</p>
                <div className={styles.songsContainer}>
                    {defaultSongs.map((element, i) => {
                        return (
                            <div key={element.id} className={styles.songsContainer}>
                                <p>{element.artist} <span style={{ opacity: ".6" }}>{element.song}</span> </p>
                                {i !== defaultSongs.length - 1 ? <span style={{ margin: "0 .3rem" }}>•</span> : ''}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal