import Link from 'next/link'
import Head from '../components/head'
import PropTypes from 'prop-types';
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
    },
    logo: {
        width: '70vw',
        display: 'flex',
        justifyContent: 'center',
    },
    list: {
        margin: '30',
        padding: '30px',
    },
    link: {
        marginLeft: '33.3%',
        resize: 'both',
        maxHeight: '4vw',
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

const Home = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Head title="Travel Quiz" />
            <Grid container spacing={40} direction={"column"} justify={"center"} alignItems={"center"}>
                <img className={classes.logo} src="/static/assets/Logo_EaiViajanteT.png" />
                <h1 className={classes.title}>Travel Quiz</h1>
                <Link href='/quiz'>
                <Button variant="extendedFab" className={classes.button}>
                    Clique aqui para começar
      </Button>
      </Link>
                <h3 style={{ marginTop: '10vw', marginBottom: '2vw', display: 'flex', justifyContent: 'space-around' }}>
                    Nos siga nas redes sociais:
                </h3>

                <Grid container className={classes.list} spacing={16} direction={"row"} justify={"center"} alignItems={"center"}>
                    <Grid item xs={2}>
                        <Link href="https://www.facebook.com/eaiviajante/">
                            <a target="_blank">
                                <img className={classes.link} src="/static/assets/facebook-logo.svg" />
                            </a>
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link href="https://eaiviajante.wordpress.com/">
                            <a target="_blank">
                                <img style={{resize: 'both', maxHeight: '4vw',}} src="/static/assets/home.svg" />
                            </a>
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link href="https://www.instagram.com/eaiviajante/">
                            <a target="_blank">
                                <img style={{resize: 'both', maxHeight: '4vw',}} src="/static/assets/instagram.svg" />
                            </a>
                        </Link>
                        </Grid>
                </Grid>
                <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      .
    `}</style>
            </Grid>
        </div>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)