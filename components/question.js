import { Component } from 'react';
import PropTypes from 'prop-types';
import shuffle from './help/shuffle';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        paddingLeft: '40px',
        paddingRight: '40px',
        margin: theme.spacing.unit,
        '&:active': {
            color: theme.palette.secondary
        }
    },
    card: {
        maxWidth: '400',
        padding: '30px',
        border: '2px solid black',
        borderRadius: '20px',
    },
    image: {
        marginTop: '4vw',
        marginBottom: '1vw',
        width: '30vw',
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        height: 700,
        width: 900,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
    },
    title: {
        fontFamily: 'Futura-Bold,-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
        marginTop: '0',
        marginBottom: '2vw',
        width: '100%',
        lineHeight: '1.15',
        textAlign: 'center',
        fontSize: '2vw',
    },
});

class Question extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { classes, question, onClick, id } = this.props;
        return (
            <Grid container className={classes.root} direction="column">
                <Grid item xs={12}>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={40}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Grid item xs={12}>
                                        {question.title}
                                    </Grid>
                                    <Grid container spacing={8} direction={"row"} justify={"center"} alignItems={"center"}>
                                        {
                                            question.options.map(
                                                (option, index) =>
                                                    <Grid key={index} item xs={6}>
                                                        <Button variant="extendedFab" onClick={() => onClick({ "id": id, "value": option.value })}>
                                                            {option.title}
                                                        </Button>
                                                    </Grid>
                                            )

                                        }
                                    </Grid>
                                </Grid>

                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
};

Question.propTypes = {
    classes: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default withStyles(styles)(Question)