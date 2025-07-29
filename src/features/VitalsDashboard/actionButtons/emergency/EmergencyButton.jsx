import React from 'react';
import { useDispatch } from 'react-redux';
import { sendFail, sendSuccess } from '../../../../slices/emergencySlice';
import { useEmergencyToast } from '../../../../hooks/useEmergencyToast';
import styles from './EmergencyButton.module.css';

const EmergencyButton = () => {
    const dispatch = useDispatch();

    const {
        notifyCall,
        notifySending,
        notifySent,
        notifyError,
    } = useEmergencyToast();

    const handleClick = () => {
        dispatch(sendSuccess());
        notifyCall();

        setTimeout(() => {
            notifySending();

            setTimeout(() => {
                const success = Math.random() > 0.2;

                if (success) {
                    dispatch(sendSuccess());
                    notifySent();
                } else {
                    dispatch(sendFail('Network error'));
                    notifyError();
                }
            }, 3000);
        }, 2000);
    }

    return (
        <button
            className={styles.emergencyButton}
            onClick={handleClick}
        >
            Emergency Call
        </button>
    );
}

export default EmergencyButton;
