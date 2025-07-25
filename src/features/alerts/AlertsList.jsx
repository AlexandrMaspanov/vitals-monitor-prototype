import React from 'react';
import { memo } from 'react';
import { ICON_MAP } from '../../constants';
import styles from '../../styles/AlertsList.module.css';

const AlertsList = ({ alerts }) => {
    return (
        <ul className={styles.list}>
            {alerts.map(({ type, field, message }, idx) => {
                const IconComponent = ICON_MAP[field];

                return (
                    <li
                        key={`${field}-${type}-${idx}`}
                        className={`${styles.item} ${styles[type]}`}
                    >
                        {IconComponent ? (
                            <IconComponent className={styles.icon} />
                        ) : (
                            <span className={styles.icon}>⚠️</span>
                        )}
                        {message}
                    </li>
                );
            })}
        </ul>
    );
}

export default memo(AlertsList);
