import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Faster | Building...</title>
                <meta name="description" content="Faster P2P NFT marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Card title='Andres' subtitle='Diaz' desc='Lorem ipsum'/>
            <main className={styles.main}>
                <Image src="/favicon.ico" alt="Logo" width="256" height="256" />
                <h1 className={styles.title}>
                    We are building something{' '}
                    <strong className={styles.strong}>amazing</strong>
                </h1>
            </main>
        </div>
    );
};

export default Home;
