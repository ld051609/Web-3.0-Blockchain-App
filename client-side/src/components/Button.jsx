import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Button = () => {
    const { connectWallet, currentAccount, formData, handleChange, sendTransaction, transactions } = useContext(TransactionContext);

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
        <div>
            <div>
                {currentAccount ?
                    <button>Connected</button> :
                    <button onClick={connectWallet}>Connect to Wallet</button>
                }
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Address To" value={formData.addressTo} onChange={(e) => handleChange(e, 'addressTo')} />
                    <input type="text" placeholder="Amount" value={formData.amount} onChange={(e) => handleChange(e, 'amount')} />
                    <input type="text" placeholder="Keyword" value={formData.keyword} onChange={(e) => handleChange(e, 'keyword')} />
                    <input type="text" placeholder="Message" value={formData.message} onChange={(e) => handleChange(e, 'message')} />
                    <button type="submit">Send Transaction</button>
                </form>
            </div>

            <div>
                <h1>Historical Transactions</h1>
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            <p>Address To: {transaction.addressTo}</p>
                            <p>Address From: {transaction.addressFrom}</p>
                            <p>Timestamp: {transaction.timestamp}</p>
                            <p>Message: {transaction.message}</p>
                            <p>Keyword: {transaction.keyword}</p>
                            <p>Amount: {transaction.amount}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Button;
