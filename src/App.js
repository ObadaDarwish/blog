import React from 'react';
import * as Style from './App.module.scss';
import {Container} from '@material-ui/core';
import useFetchComments from "./hooks/useFetchAPI";
import Comment from './components/Comment/Comment';
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import Alert from "./components/Alert/Alert";

const App = () => {
    const [data, loading, error, setError] = useFetchComments('https://blog-demo-create.herokuapp.com/comments');
    const errorHandler = () => {
        setError(false);
    };
    return (
        <Container maxWidth="sm" className={Style.appContainer}>
            {loading ? (
                <LoadingIndicator/>
            ) : (
                data && data.map((comment) => {
                    return (
                        <Comment key={comment.id} {...comment}/>
                    );
                })
            )}
            {error && <Alert severity={'error'} message={error} handleClose={errorHandler}/>}
        </Container>
    );
};

export default App;
