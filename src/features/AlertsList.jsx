import React from 'react';
import { memo } from 'react';

const AlertsList = ({ alerts }) => {
    return (
        <ul>
            {alerts.map((alert) => (
                <li key={`alert-${alert}`}>{alert}</li>)
            )}
        </ul>
    );
}

export default memo(AlertsList);
