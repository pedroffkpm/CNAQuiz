import { withStyles } from '@material-ui/core/styles';
import Head from '../components/head';
import categories from '../static/categories.json';
import PropTypes from 'prop-types';
import FacebookProvider, { Share } from 'react-facebook-sdk';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontFamily: 'Futura-Bold,-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
        marginTop: '5vw',
        marginBottom: '2vw',
        width: '100%',
        paddingTop: '0',
        lineHeight: '1.15',
        textAlign: 'center',
        fontSize: '48px',
    },
});

const findProfile = (id) => {
    for(var index in categories) {
        if(categories[index].id === id) {
            return categories[index]
        }
    }

}

const Result = (props) => {
    const { classes, id } = props;
    const profile = findProfile(id);
    const { title, img, text } = profile;
    window.scrollTo(0,0);
    return (
        <div className={classes.root}>
            <Head title={title} description={text} ogImage={`/static/images/${img}`}/>
            <h2 className={classes.title}> {title} </h2>
            <FacebookProvider appId='2050302261854131' xfbml>
                <Share redirectURI="https://travelquiz.herokuapp.com">
                    <Button> Share </Button>
                </Share>
            </FacebookProvider>
        </div>
    )
}

Result.propTypes = {
    classes: PropTypes.object.isRequired,
};

Result.getInitialProps = async (context) => {
    const { id } = context.query
    return { id }
}

export default withStyles(styles)(Result)