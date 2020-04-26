import React from 'react';
import Alert from '@material-ui/lab/Alert';

const AlertComponent = ({message, varient, severity, handleClose}) => {
    return (
        <Alert variant={varient} severity={severity} onClose={handleClose}>{message}</Alert>
    );

};

export default AlertComponent;
