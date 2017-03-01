import React from 'react';
import styles from './TransportSchedule.stylesheet.css';
import classNames from 'classnames';

const TransportSchedule = ({ schedule }) => {
  return (
    <div className={classNames(styles.TransportSchedule, 'container-fluid')}>
      <div className='col-md-offset-3 col-md-6'>
        <div className={styles.scheduleTable}>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Godzina</th>
                <th>Początek trasy</th>
                <th>Cel</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((route, index) =>
                <tr key={index}>
                  <td>{route.time}</td>
                  <td>{route.from}</td>
                  <td>{route.to}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default TransportSchedule;