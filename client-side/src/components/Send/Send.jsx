import React, {useContext} from 'react'
import styles from './Send.module.css'
import { TransactionContext } from '../../context/TransactionContext';

const Send = () => {
  const {formData, handleChange, sendTransaction } = useContext(TransactionContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) {
        alert('Please fill all fields');
        return;
    }

    try {
        await sendTransaction();
        // Optionally, you can re-fetch transactions after sending
        // getAllTransactions();
    } catch (error) {
        console.error(error);
    }
  }
  return (
    <div id="#send" className={styles.container}>
      <h1 className={styles.sendHeading}>Services</h1>
      <ul className={styles.bulletPoints}>
        <li>1. Send Ether to any address securely.</li>
        <li>2. Specify a keyword to categorize your transaction.</li>
        <li>3. Add a personal message for the recipient.</li>
        <li>4. Instant confirmation and transaction tracking.</li>
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Address To" value={formData.addressTo} onChange={(e) => handleChange(e, 'addressTo')} />
            <input type="text" placeholder="Amount" value={formData.amount} onChange={(e) => handleChange(e, 'amount')} />
            <input type="text" placeholder="Keyword" value={formData.keyword} onChange={(e) => handleChange(e, 'keyword')} />
            <input type="text" placeholder="Message" value={formData.message} onChange={(e) => handleChange(e, 'message')} />
            <button type="submit">Send Transaction</button>
        </form>
      </div>
    </div>
  )
}

export default Send