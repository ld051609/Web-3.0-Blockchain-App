import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { TransactionContext } from '../../context/TransactionContext';
import { Send, Services } from '../../components/index';

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <ul>
            <h1>Blockchain Web 3.0</h1>
            <li><a href="#home">Home</a></li>
            <li><a href="#send">Services</a></li>
            <li><a href="#services">Historical Transactions</a></li>
          </ul>
        </div>
        <div className={styles.intro} id="home">
          <div className={styles.textIntro}>
            <h1 className={styles.textIntroHeading}>Welcome to our blockchain platform!</h1>
            <p>Learn how to send Ether to anyone around the globe with just a few clicks. Whether you're new to the world of cryptocurrencies or a seasoned trader, our platform is designed to make your Ether transactions simple, secure, and transparent. Join us and explore the future of digital finance!</p>
            <div className={styles.btnContainer}>
              {currentAccount ?
                "" :
                <button className={styles.walletBtn} onClick={connectWallet}>Connect Wallet</button>
              }
            </div>
          </div>
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div id='send'>
        <Send />
      </div>
      <div id='services'>
        <Services />
      </div>
    </div>
  );
}

export default Navbar;
