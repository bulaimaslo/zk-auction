import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import type { Add } from '../../../contracts/src/';
import {
  Mina,
  isReady,
  PublicKey,
  fetchAccount,
} from 'snarkyjs';

export default function Home() {
  useEffect(() => {
    (async () => {
      await isReady;
      const { Add } = await import('../../../contracts/build/src/');

      // Update this to use the address (public key) for your zkApp account
      // To try it out, you can try this address for an example "Add" smart contract that we've deployed to 
      // Berkeley Testnet B62qisn669bZqsh8yMWkNyCA7RvjrL6gfdr3TQxymDHNhTc97xE5kNV
      const zkAppAddress = 'B62qisn669bZqsh8yMWkNyCA7RvjrL6gfdr3TQxymDHNhTc97xE5kNV';
      // This should be removed once the zkAppAddress is updated.
      if (!zkAppAddress) {
        console.error(
          'The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qqkb7hD1We6gEfrcqosKt9C398VLp1WXeTo1i9boPoqF7B1LxHg4'
        );
      }

      const zkApp = new Add(PublicKey.fromBase58(zkAppAddress));

    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>ZK auction</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ZK auction
        </h1>

        <div className={styles.grid}>

          <div className={styles.product}>
            <img src="product1.jpg" alt="Product 1" />
            <h2>Product 1</h2>
            <p>Description of Product 1</p>
            <form action="" method="post">
              <label htmlFor="bid1">Bid:</label>
              <input type="number" name="bid1" id="bid1" min="11" />
              <input type="submit" value="Bid" />
            </form>
          </div>

          <div className={styles.product}>
            <img src="product2.jpg" alt="Product 2" />
            <h2>Product 2</h2>
            <p>Description of Product 2</p>
            <form action="" method="post">
              <label htmlFor="bid2">Bid:</label>
              <input type="number" name="bid2" id="bid2" min="16" />
              <input type="submit" value="Bid" />
            </form>
          </div>

          <div className={styles.product}>
            <img src="product3.jpg" alt="Product 3" />
            <h2>Product 3</h2>
            <p>Description of Product 3</p>
            <form action="" method="post">
              <label htmlFor="bid3">Bid:</label>
              <input type="number" name="bid3" id="bid3" min="21" />
              <input type="submit" value="Bid" />
            </form>
          </div>

          <div className={styles.product}>
            <img src="product4.jpg" alt="Product 4" />
            <h2>Product 4</h2>
            <p>Description of Product 4</p>
            <form action="" method="post">
              <label htmlFor="bid4">Bid:</label>
              <input type="number" name="bid4" id="bid4" min="26" />
              <input type="submit" value="Bid" />
            </form>
          </div>
        </div>

      </main>

    </div>
  );
}

