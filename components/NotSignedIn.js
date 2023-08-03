import styles from '../styles/components/NotSignedIn.module.css'
import Image from 'next/image'
import emoji from '../assets/img/sad_emoji.svg'
import { signIn } from 'next-auth/react'

function NotSignedIn() {
  return (
    <div className={styles.containier}>
      <Image
        src={emoji}
        width={"10rem"}
        height={"9rem"}
        className={styles.img}
        alt='sad emoji'
      />
      <button onClick={()=> signIn()} className={styles.btn}>Sign In</button>
    </div>
  )
}

export default NotSignedIn