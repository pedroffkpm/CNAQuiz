import { withStyles } from '@material-ui/core/styles';
import data from '../static/assets/data.json';
import categories from '../static/assets/categories.json';
import Question from '../components/question';
import shuffle from '../components/help/shuffle';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router' 
import { Component } from 'react';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginTop: '1vw',
        marginBottom: '1vw',
        width: '30vw',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        marginTop: '5vw',
        marginBottom:'2vw',
    },
    question: {
        paddingTop: '10vw',
        paddingBottom:'5vw',
        marginLeft: '40vw',
        marginRight: '40vw',
        maxWidth:'60vw',
        display: 'flex',
        justifyContent: 'center',
    }
});
class Quiz extends Component {
    constructor(props) {
        super(props);
        const {numberOfRounds, questions} = data;
        shuffle(questions);

        questions.map(
            question => shuffle(question.options)
        )

        this.state = { incomplete: true, answered: 0, log:[], questions: shuffle(questions).splice(0, numberOfRounds), score:{}, profile: "" };

    }

    calcProfile= (obj) => {
        var max = -Infinity;
        var ans = '';

        for (var key in obj) {
            console.log(key);
            if(obj[key] > max){
                max = obj[key];
                ans = key;
            }
    }

    return ans
}

    onChoice = (key) => {

        let newState = Object.assign({}, this.state);
        const profiles = categories.map(a => a.id)
        const {id, value} = key;
        newState.log[id] = value;

        profiles.map( //reset scores
            profile =>
            newState.score[profile] = 0
        )

        newState.answered = 0
        for(var i in this.state.log) {
            var valueIterator = newState.log[i]
            newState.answered += 1
        for(var category in valueIterator) {
            newState.score[category] += valueIterator[category]
        }
    }
        newState.profile = this.calcProfile(newState.score);
        newState.incomplete = !(newState.answered === newState.questions.length)

        this.setState(newState);

        console.log(this.state.incomplete);
 
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
            <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
            <img className={classes.logo} src="/static/assets/Logo_EaiViajanteT.png" />
            {
                this.state.questions.map(
                    (question, index) =>
                    <Question key={index} className={classes.question} id={question.id} question={question} onClick={(choice) => this.onChoice(choice)}/>
                )
            }
            <br/>
                
            <Button className = {classes.button} variant="extendedFab" onClick={() => Router.push(`/subscribe?id=${this.state.profile}`, `/subscribe`)} disabled={this.state.incomplete}>  Avançar >  </Button>

            </Grid>
            </div>
        )
    }
}


Quiz.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quiz)