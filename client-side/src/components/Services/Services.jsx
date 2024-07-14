import React, { useContext } from 'react';
import styles from './Services.module.css';
import { TransactionContext } from '../../context/TransactionContext';

const Services = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.servicesHeading}>Historical Transactions</h1>
      <ul className={styles.transactionList}>
        {transactions.map((transaction, index) => (
          <li key={index} className={styles.transactionItem}>
            <p><strong>Address To:</strong> {transaction.addressTo}</p>
            <p><strong>Address From:</strong> {transaction.addressFrom}</p>
            <p><strong>Timestamp:</strong> {transaction.timestamp}</p>
            <p><strong>Message:</strong> {transaction.message}</p>
            <p><strong>Keyword:</strong> {transaction.keyword}</p>
            <p><strong>Amount:</strong> {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
