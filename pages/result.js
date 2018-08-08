import { withStyles } from '@material-ui/core/styles';
import Head from '../components/head';
import categories from '../static/categories.json';
import PropTypes from 'prop-types';
import FacebookProvider, { Share } from 'react-facebook-sdk';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import {FbIcon} from '../components/icons';


const styles = theme => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Futura-Bold,-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
    },
    title: {
        width: '100%',
        paddingTop: '0',
        lineHeight: '1.15',
        textAlign: 'center',
        fontSize: '48px',
    },
    icon: {
        fontSize: 20,
    },

    image: {
        resize: 'both',
        maxHeight: 500,
    },
    paper: {
        height: '100% important',
        width: '80vw',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
    },
});

const findProfile = (id) => {
    for (var index in categories) {
        if (categories[index].id === id) {
            return categories[index]
        }
    }
}

const Result = (props) => {
    const { classes, id } = props;
    const profile = findProfile(id);
    console.log('profile: ', profile);
    const { title, img, text } = profile;
    return (
        <div>
            <Head title="Travel Quiz" ogTitle={title} description={text} appId='2050302261854131' ogImage={`https://travelquiz.herokuapp.com/static/images/${img}`} />
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justify="center">
                        <Grid item>
                            <Paper className={classes.paper} elevation={4}>
                            <Grid container spacing={24} alignItems="center" direction="column" justify="center">
                                <Grid item>
                                    <h2 className={classes.title}> {title} </h2>
                                </Grid>
                                <Grid item>
                                        <img className={classes.image} src={`/static/images/${img}`} style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                                </Grid>
                                <Grid item>
                                    <h3 style={{maxWidth: 500, margin: 'auto'}}> {text} </h3>
                                </Grid>
                                <Grid item>
                                    <FacebookProvider appId='2050302261854131' xfbml>
                                        <Share redirectURI="https://travelquiz.herokuapp.com">
                                            <Button variant="contained"> 
                                                <FbIcon className={classes.icon} />
                                                Share
                                            </Button>
                                        </Share>
                                    </FacebookProvider>
                                </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

Result.propTypes = {
    classes: PropTypes.object.isRequired,
};

Result.getInitialProps = async (context) => {
    console.log(context)
    const { id } = context.query
    return { id }
}

export default withStyles(styles)(Result)