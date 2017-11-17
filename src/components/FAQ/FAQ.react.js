import React from 'react';
import styles from 'components/FAQ/FAQ.scss';

export default class FAQ extends React.Component{

  render(){
    return(
      <div className={styles.faq}>
        <div className={styles.title}>
         Frequently Asked Questions:
        </div>
        <div className={styles.question}>
            Sample question #1?
        </div>
        <div className={styles.answer}>
            Sample answer #1.
        </div>
        <div className={styles.question}>
            Sample question #2?
        </div>
        <div className={styles.answer}>
            Sample answer #2.
        </div>
        <div className={styles.question}>
            Sample question #3?
        </div>
        <div className={styles.answer}>
            Sample answer #3.
        </div>
      </div>
    );
  }
}
