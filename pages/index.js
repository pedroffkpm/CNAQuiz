import Link from 'next/link'
import Head from '../components/head';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FbIcon, HomeIcon, InstaIcon } from '../components/icons';
import findProfile from '../components/help/findProfile';

const styles = theme => ({
    text: {
        marginTop: 100,
        fontFamily: '-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
        display: 'flex',
        justifyContent: 'space-around'
    },
    root: {
        flexGrow: 1,
        margin: 0,
    },
    button: {
        marginTop: 0,
        paddingLeft: '40px',
        paddingRight: '40px',
        margin: theme.spacing.unit,
    },
    logo: {
        marginTop: '4vw',
        width: '70vw',
        display: 'flex',
        justifyContent: 'center',
    },
    list: {
        marginTop: '0 important',
        padding: '20px',
    },
    link: {
        marginLeft: '33.3%',
        resize: 'both',
        maxHeight: '4vw',
    },
    icon: {
        fontSize: 48,
        color: 'black',
    },
    title: {
        fontFamily: 'Futura-Bold,-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
        marginTop: 0,
        marginBottom: '2vw',
        width: '100%',
        paddingTop: '0',
        lineHeight: '1.15',
        textAlign: 'center',
        fontSize: '48px',
    },
});

const Home = (props) => {
    const { classes, profile } = props;
    var title, img, text = '';
    if(typeof profile != 'undefined') {
        title = profile.title;
        img = `https://travelquiz.herokuapp.com/static/images/${profile.img}`;
        text = profile.text;
    }
    return (
        <div className={classes.root}>
            <Head title="Travel Quiz" ogTitle={title} description={text} appId='2050302261854131' ogImage={img}/>
            <Grid container spacing={40} direction={"column"} justify={"center"} alignItems={"center"}>
                    <img className={classes.logo} src="/static/Logo_EaiViajanteT.png" />
                    <h1 className={classes.title}>Travel Quiz</h1>
                <Grid item xs={12}>
                    <Link href='/quiz'>
                        <Button variant="extendedFab" className={classes.button}>
                            Clique aqui para começar
                        </Button>
                    </Link>
                </Grid>
                    <h3 className={classes.text}>
                        Nos siga nas redes sociais:
                    </h3>
                <Grid item xs={12}>
                    <Grid container className={classes.list} spacing={40} direction={"row"} justify={"center"} alignItems={"center"}>
                        <Grid item>
                            <Link href="https://www.facebook.com/eaiviajante/">
                                <a target="_blank">
                                    <FbIcon className={classes.icon} />
                                </a>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://eaiviajante.wordpress.com/">
                                <a target="_blank">
                                    <HomeIcon className={classes.icon} />
                                </a>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://www.instagram.com/eaiviajante/">
                                <a target="_blank">
                                    <InstaIcon className={classes.icon} />
                                </a>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

Home.getInitialProps = async (context) => {
    if(typeof context.query.id != 'undefined') {
        const profile = findProfile(context.query.id)
        return { profile: profile }
    }
    else return {}
}

export default withStyles(styles)(Home)