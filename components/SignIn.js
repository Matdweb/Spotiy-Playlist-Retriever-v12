'use client'
import { useSession, signOut } from 'next-auth/react';
import styles from '../styles/components/SignIn.module.css'
import Image from 'next/image'
import user_img from '../assets/img/user_img.svg'

function SignIn() {
    const { data: session } = useSession();

    return (
        <div className={styles.container}>
            <div className={styles.profile} >
                <Image
                    src={user_img}
                    width='10rem'
                    height='10rem'
                    alt='Defualt user image'
                />
                <p className={`txt-normal ${styles.normalTxt}`}>Sign In as</p>
                <span className='bold-txt'>{session?.token?.name}</span>
            </div>
                <p className={styles.signOutTxt} onClick={() => signOut()}>Sign Out</p>
        </div>
    )
}

export default SignIn