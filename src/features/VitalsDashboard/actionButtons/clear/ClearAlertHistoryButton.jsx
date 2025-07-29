import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearAllHistory } from '../../../../slices/alertsHistorySlice';
import { clearAlerts } from '../../../../slices/alertsSlice';
import styles from './ClearAlertHistoryButton.module.css';

const ClearAlertHistoryButton = () => {
    const dispatch = useDispatch();
    const alertsHistory = useSelector(state => state.alertsHistory.items) || [];

    const handleClick = () => {
        dispatch(clearAllHistory());
        dispatch(clearAlerts());
        toast.success('Alert history cleared');
    }

    return (
        <button
            className={styles.clearButton}
            onClick={handleClick}
            disabled={alertsHistory.length === 0}
        >
            Clear Alert History
        </button>
    );
}

export default ClearAlertHistoryButton;
