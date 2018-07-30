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
});

class Quiz extends Component {
    constructor(props) {
        super(props);
        const {numberOfRounds, questions} = data;
        shuffle(questions);

        this.state = { log:[], questions: shuffle(questions).splice(0, numberOfRounds), score:{}, profile: -1 };

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
    return categories.indexOf(ans);
}

    handleChoice = (key) => {
        const {id, value} = key;
        this.state.log[id] = value;

        categories.map( //reset scores
            category =>
            this.state.score[category] = 0
        )

        for(var i in this.state.log) {
            var valueIterator = this.state.log[i]
        for(var category in valueIterator) {
            this.state.score[category] += valueIterator[category]
        }
    }

        this.state.profile = this.calcProfile(this.state.score);

        console.log(this.state.score);
        console.log("profile  " + this.state.profile);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
            <Grid container spacing={40} direction={"column"} justify={"center"} alignItems={"center"}>
            {
                this.state.questions.map(
                    (question) =>
                    <Question id={question.id} question={question} onClick={(key) => this.handleChoice(key)}/>
                )
            }
            <br/>
                
            <Button variant="extendedFab" onClick={() => Router.push(`/subscribe?id=${this.state.profile}`, `/subscribe`)}>v</Button>

            </Grid>
            </div>
        )
    }
}


Quiz.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quiz)