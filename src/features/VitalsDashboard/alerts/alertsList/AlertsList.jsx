import React from 'react';
import { memo } from 'react';
import styles from './AlertsList.module.css';
import AlertItem from '../alertItem/AlertItem';

const AlertsList = ({ alerts }) => {
    return (
        <ul className={styles.list}>
            {alerts.map(alert => {
                const {id, metricKey, label, unit, current, threshold, deviation, direction, level, color, timestamp} = alert;

                return (
                    <li
                        key={id}
                        className={`${styles.item}`} // ${styles[type]}`}
                    >
                        <AlertItem alert={alert} />
                    </li>
                );
            })}
        </ul>
    );
}

export default memo(AlertsList);
