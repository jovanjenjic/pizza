import { useState } from "react";
import styles from '../styles/OrderDetails.module.css'

const OrderDetails = ({total, createOrder}) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    console.log('udjesli', customer, address, total);
    createOrder({customer, address, total, method: 0});
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.titlw}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input onChange={(e) => setCustomer(e.target.value)} className={styles.input} placeholder='John Doe' type="text" />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input 
            onChange={(e) => setCustomer(e.target.value)}
            className={styles.input} 
            placeholder='00381 61 64 85 022' 
            type="text" 
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder='Elton St. 505 NY' 
            className={styles.input} 
            onChange={(e) => setAddress(e.target.value)} 
            type="text" 
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  )
}

export default OrderDetails;