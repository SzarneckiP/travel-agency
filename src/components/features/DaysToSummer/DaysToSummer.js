import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getCountdownDay() {
    const currentDate = new Date();
    const startSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const endSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23));

    if (
      currentDate.getUTCMonth() == endSummer.getUTCMonth() &&
      currentDate.getUTCDate() > endSummer.getUTCDate()
    ) {
      startSummer.setUTCFullYear(startSummer.getUTCFullYear() + 1);
    }

    const daysToSummer = Math.round((startSummer.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysToSummer === 1) {
      return daysToSummer + ' day to Summer!';
    } else if (daysToSummer <= 0) {
      return '';
    } else {
      return daysToSummer + ' days to Summer.';
    }
  }
  render() {
    const getCountdownDay = this.getCountdownDay();
    return (
      <div className={styles.component}>
        <div className={styles.description}>{getCountdownDay}</div>
      </div>
    );
  }
}

export default DaysToSummer;
