"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Video from "@/app/video";

export default function Home() {
    return (
        <main className={styles.main}>
            <nav className={styles.navbar}>
                <img src="/images/streamoolahlogo.png" alt="streamoolah-logo" className={styles.logo} />
                
                <div style={{ margin: '0 auto', width: '100%', textAlign: 'center', marginTop: '10px' }}><h2>Streamoolah Video Upload</h2><p><a href={process.env.RETURN_URL}>Return to Streamoolah Dashboard.</a></p></div>

                <div/>
            </nav>
            <div style={{ borderTop: '1px solid var(--primary-color)', width: '100%' }}></div>
            <Video></Video>
            <div style={{ margin: '0 auto', width: '100%', textAlign: 'center', marginTop: '10px' }}><p><a href={process.env.RETURN_URL}>Return to Streamoolah Dashboard.</a></p></div>
        </main>
    );
}

