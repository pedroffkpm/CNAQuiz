import { withStyles } from '@material-ui/core/styles';
import categories from '../static/assets/categories.json';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


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

const Result = (props) => {
    const {classes, id} = props;
    const {title, img, text} = categories[id];
    return (
        <div>
            <h2 className={classes.title}> {categories[id]} </h2>
            <Button> Share </Button>
            </div>
    )
}

Result.PropTypes

Result.getInitialProps = async (context) => {
    const { id } = context.query
    return { id }
}

export default withStyles(styles)(Result)