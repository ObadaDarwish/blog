import React, {useRef, useEffect} from 'react';
import * as Style from './Description.module.scss';

const Description = ({content, video, expanded}) => {
    const videoRef = useRef();
    useEffect(() => {
        if (videoRef.current) {
            if (!expanded) {
                videoRef.current.pause();
            }
        }
    }, [expanded]);
    return (
        <div className={Style.descriptionWrapper}>
            <video ref={videoRef} src={`https://blog-demo-create.herokuapp.com${video}`} controls autoPlay playsInline />
            <p>{content}</p>
        </div>
    );
};

export default Description;
