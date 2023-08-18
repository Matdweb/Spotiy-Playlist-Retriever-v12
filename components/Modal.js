import styles from '../styles/components/Modal.module.css'

function Modal({ toggleModal }) {

    const defaultSongs = [{
        artist: "Ed Sheeran",
        song: "Photograph"
    }, {
        artist: "Taylor Swift",
        song: "Bad Blood"
    }];

    return (
        <div onClick={() => toggleModal()} className={styles.father}>
            <div className={styles.container + " " + styles.txt} >
                <h1 className={styles.title + " primary-title"}>Important</h1>
                <p className={styles.msj}>This is just an experimental app so you
                    can’t choose the songs in your new playlists</p>

                <p>For now your playlists has this songs:</p>
                <div className={styles.songsContainer}>
                    {defaultSongs.map((element, i) => {
                        return (
                            <>
                                <p>{element.artist}</p>
                                <p><span className={styles.song}>{element.song}</span></p>
                                {i !== defaultSongs.length-1 ? <p>•</p> : ''}
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal