import { useSelector } from "react-redux";

function VitalsDashboard() {
    const { heartRate, bloodPressure, pulse, timestamp } = useSelector(state => state.vitals);

    return (
        <div>
            <p><strong>Heart Rate:</strong> {heartRate ?? '--'} bpm</p>
            <p><strong>Blood Pressure:</strong> {bloodPressure ?? '--'}</p>
            <p><strong>Pulse:</strong> {pulse ?? '--'} bpm</p>
            <p><strong>Timestamp:</strong> {timestamp ? new Date(timestamp).toLocaleTimeString() : '--'}</p>
        </div>
    );
}

export default VitalsDashboard;
