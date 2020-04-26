import React, {useState} from 'react';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Container} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as Style from './Comment.module.scss';
import Description from './Description/Description';
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import useFetchDetails from '../../hooks/useFetchAPI';
import {makeStyles} from '@material-ui/core';
import Alert from "../Alert/Alert";


const useStyles = makeStyles({
    root: {
        '& .MuiExpansionPanelSummary-content': {
            flexFlow: 'row wrap'
        }
    }
});
const Comment = ({content, title, id}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(null);
    const [commentEndpoint, setCommentEndPoint] = useState(null);
    const [fetchedData, loading, error, setError] = useFetchDetails(commentEndpoint);
    const errorHandler = () => {
        setError(false);
    };
    const handleChange = (id) => (event, isExpanded) => {
        setExpanded(isExpanded ? id : false);
        setCommentEndPoint(`https://blog-demo-create.herokuapp.com/comments/${id}`);
    };

    return (
        <ExpansionPanel className={Style.expansionPanel} expanded={expanded === id} onChange={handleChange(id)}>
            <ExpansionPanelSummary
                className={classes.root}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={Style.title}>{title}</Typography>
                {expanded !== id && <Typography className={Style.content}>{content}</Typography>}

            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {loading ?
                    (<LoadingIndicator/>) : (
                        fetchedData && <Description {...fetchedData} expanded={expanded === id}/>
                    )}
            </ExpansionPanelDetails>
            {error && <Alert severity={'error'} message={error} handleClose={errorHandler}/>}
        </ExpansionPanel>
    );
};

export default Comment;
