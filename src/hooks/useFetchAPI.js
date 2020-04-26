import {useState, useEffect} from 'react';
import axios from 'axios';

export default (url) => {
    const [fetchedData, setFetchedData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const fetchData = (canSetState) => {
        axios.get(url).then((result) => {
            let {data} = result;
            if (canSetState) {
                setFetchedData(data);
                setLoading(false);
            }
        }).catch((error) => {
            let {data} = error.response;
            if (canSetState) {
                setError(data);
                setLoading(false);
            }
        });
    };

    useEffect(() => {
        let canSetState = true;
        if (url) {
            fetchData(canSetState);
        }
        return () => {
            canSetState = false;
        };
    }, [url]);

    return [fetchedData, loading, error,setError];
}
