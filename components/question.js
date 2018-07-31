import { Component } from 'react';
import PropTypes from 'prop-types';
import shuffle from './help/shuffle';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
        margin: '500',
        padding: '30px',
        border: '2px solid black',
        borderRadius: '20px',
    },

    title: {
        fontFamily: 'Futura-Bold,-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
        marginTop: '0',
        marginBottom: '2vw',
        width: '100%',
        paddingTop: '0',
        lineHeight: '1.15',
        textAlign: 'center',
        fontSize: '48px',
    },
});

class Question extends Component {

    constructor(props) {
        super(props);

    }

render() {
    const { classes, question, onClick, id } = this.props;
    shuffle(question.options);
        return (
        <div className={classes.root}>
            <Grid container spacing={16} direction={"column"} justify={"center"} alignItems={"center"}>
                <Grid className={classes.card} item xs>
                    <h1 className={classes.title}>
                        {question.title}
                    </h1>
                    <Grid container spacing={40} direction={"row"} justify={"center"} alignItems={"center"}>
                        {
                     question.options.map(
                            (option, index) =>
                            <Grid item xs={6}>
                                <Button key={index} variant="extendedFab" onClick={() => onClick({"id": id, "value": option.value})}>
                                {option.title}
                                </Button>
                            </Grid>
                                    )

                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
};

Question.propTypes = {
    classes: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default withStyles(styles)(Question)