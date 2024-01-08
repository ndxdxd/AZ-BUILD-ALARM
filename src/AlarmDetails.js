import React from 'react';

const AlarmDetails = ({ alarm }) => {
    const timestamp = new Date(alarm.ts);
    const date = timestamp.toLocaleDateString();
    const time = timestamp.toLocaleTimeString();

    // Check alarm status and set the status text
    const statusText = JSON.stringify(alarm.alarmStatus) === '{"lockedStatus":0}' ? 'Open' : 'Closed';

    return (
        <div className="update-box">
            <h4>{statusText}</h4>
            <h6>Date: {date}</h6>
            <h6>Time: {time}</h6>
        </div>
    );
};


export default AlarmDetails