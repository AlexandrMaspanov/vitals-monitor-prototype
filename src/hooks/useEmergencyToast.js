import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearAllHistory } from '../slices/alertsHistorySlice';

export const useEmergencyToast = () => {
    const dispatch = useDispatch();
    const alerts = useSelector(state => state.alertsHistory.items);

    const notifyCall = () =>
        toast.success('Call in progress...', { autoClose: 2000 });

    const notifySending = () => {
        toast.success(`Sending an alerts...`, { autoClose: 3000 });

        let delay = 0;
        alerts.forEach((alert) => {
            delay += 500;
            setTimeout(() => {
                const { label, value, unit, timestamp } = alert;
                toast(`${new Date(timestamp).toLocaleTimeString()}: ${label} = ${value} ${unit}`, { autoClose: 1500 });
            }, delay);
        });

        setTimeout(() => {
            dispatch(clearAllHistory());
            toast.success('Alert history cleared');
        }, delay + 1000);
    };

    const notifySent  = () =>
        toast.success('Alert sent', {autoClose: 4000});

    const notifyError = () =>
        toast.error(`Sending error`, { autoClose: 4000 });

    return { notifyCall, notifySending, notifySent, notifyError };
};
