import { withStyles } from '@material-ui/core/styles';
import data from '../static/data.json';
import categories from '../static/categories.json';
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

    scrollToNext = (index) => {
        console.log("scroll")
        const elm = document.getElementById(`${index + 1}`)
        elm.scrollIntoView()
    }


    onClick = (key) => {

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

        console.log("onClick and the button is ", this.state.incomplete);
        this.setState(newState);

        
 
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.root} direction="column">
                <Grid item xs={12}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={40}>
                    <Grid item>
                    <img className={classes.logo} src="../static/Logo_EaiViajanteT.png"/>
                    </Grid>
                    {
                        this.state.questions.map(
                            (question, index) =>
                            <Grid item key={index} id={`${index}`}>
                                <Question question={question} onClick={(choice) => {this.onClick(choice)}} />
                            </Grid>
                        )
                    }
                    <Grid item>
                    <Button variant="extendedFab"
                        style={{marginTop: '3vw', paddingLeft: '3vw', paddingRight: '3vw'}}
                        onClick={() => Router.push(`/subscribe?id=${this.state.profile}`, `/subscribe`)}
                        disabled={this.state.incomplete}>
                        avançar
                    </Button>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        )
    }
}


Quiz.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quiz)