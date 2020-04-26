import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as Style from './LoadingIndicator.module.scss';

const LoadingIndicator = () => {
    return (
        <div className={Style.LoadingContainer}>
            <CircularProgress size={30}/>
        </div>
    );
};

export default LoadingIndicator;
