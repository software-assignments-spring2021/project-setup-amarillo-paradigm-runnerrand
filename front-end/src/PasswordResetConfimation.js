import React from 'react';
import './notification.scss';

const Notification = (props) => (
  <div>
    <div className="Notification">{props.text}</div>
    {(() => {
      if (props.error !== '') {
        return (
          <div className="Notification Notification--error">
            {props.error}
          </div>
        );
      }
    })()}
  </div>
);

export default Notification;