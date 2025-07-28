import React, { memo } from 'react';
import AlertItem from '../alertItem/AlertItem';
import styles from './AlertsList.module.css';

const AlertsList = ({ alerts }) => {
    return (
        <ul className={styles.list}>
            {alerts.map(alert => (
                <li
                    key={alert.id}
                    className={`${styles.item} ${alert.direction}`}
                >
                    <AlertItem alert={alert} />
                </li>
            ))}
        </ul>
    );
}

export default memo(AlertsList);
