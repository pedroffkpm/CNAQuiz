import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import data from '../static/assets/data.json';
import Quiz from '../components/quiz';
import shuffle from '../components/help/shuffle';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    list: {
        margin: '30',
        padding: '30px',
    },
});

  var answers = [];
  var q = [];

function handleChoice(key) {
    const {index, value} = key;

    answers[index] = value;

    console.log(answers);
}

const quizPage = (props) => {
    const { classes } = props;
    const {numberOfRounds, questions} = data;
    shuffle(questions);

    q = questions.splice(0, numberOfRounds);

    return (
        <div className={classes.root}>

        <Grid container spacing={40} direction={"column"} justify={"center"} alignItems={"center"}>
        {
            q.map(
                (item, index) =>
                <Quiz question={item} index={index} onClick={(key) => handleChoice(key)}/>
            )
        }

        <br/>
        <Link href={`/subscribe`}>
        <Button variant="extendedFab">v</Button>
        </Link>
        </Grid>
        </div>
    )
}

quizPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(quizPage)