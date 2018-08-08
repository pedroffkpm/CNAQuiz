import { Component } from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomButton from '../components/customButton';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingBottom: '2vw',
    },
    button: {
        paddingLeft: '40px',
        paddingRight: '40px',
        margin: theme.spacing.unit,
        '&:active': {
            color: theme.palette.secondary
        }
    },
    image: {
        marginTop: '4vw',
        marginBottom: '1vw',
        width: '30vw',
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        height: '100% important',
        width: '80vw',
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
        fontSize: '5vw',
    },
});

class Question extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { classes, question, onClick } = this.props;
        console.log(this.props);
        const { id } = question;
         var elevation = 0;
        if (isWidthUp('lg', this.props.width)) {
            elevation=1;
          }

        console.log(elevation);
        return (
            <Paper className={classes.paper} elevation={elevation}>
                <Grid container className={classes.root} spacing={16} alignItems="center" direction="column" justify="center">
                    <Grid item>
                        <h3 className={classes.title}> {question.title} </h3>
                    </Grid>
                    <Grid container spacing={8} justify="center">
                        {
                            question.options.map(
                                (option, index) => {
                                    return(
                                    <Grid item xs={12} lg={5}>
                                        <Grid container justify="center">
                                            <Grid item key={index}>
                                                <CustomButton image={`/static/images/${option.image}`} onClick={() => onClick({ "id": id, "value": option.value })}>
                                                        {option.title}
                                                </CustomButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    )}
                            )
                        }
                    </Grid>
                </Grid>
            </Paper>
        )
    }
};

Question.propTypes = {
    classes: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

// export default withStyles(styles)(Question)
export default withStyles(styles)(withWidth()(Question))