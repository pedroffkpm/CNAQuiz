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
    margin: '40',
    padding: '40px',
    border: '1px solid #DDD',
  },
  link: {
    marginTop: '1%',
    marginLeft: '40%',
    marginRight: '40%',
    resize: 'both',
    maxHeight: '5vw',
  },

  title: {
    fontFamily: 'Futura-Bold,-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
    marginTop: '2vw',
    width: '100%',
    paddingTop: '0',
    lineHeight: '1.15',
    textAlign: 'center',
    fontSize: '48px',
  },
});

const Home = (props) => {
  const {classes} = props;

  return(
  <div className={classes.root}>
    <Head title="Travel Quiz"/>
    <Grid container spacing={40} direction={"column"} justify={"center"} alignItems={"center"}>
      <img className={classes.logo} src="/static/assets/Logo_EaiViajanteT.png"/>
      <h1 className={classes.title}>Travel Quiz</h1>
      <Button variant="extendedFab" className={classes.button}>
        Clique aqui para começar
      </Button>
    <h3 style={{maxWidth: '880px', marginTop: '12vw', marginBottom: '2vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        Nos siga nas redes sociais:
    </h3>

    <Grid container direction={"row"} justify={"center"} alignItems={"center"} className={classes.list}>
        <Link href="https://www.facebook.com/eaiviajante/">
          <a target="_blank">
            <img className={classes.link}src="/static/assets/facebook-logo.svg"/>
          </a>
        </Link>
        <Link href="https://www.facebook.com/eaiviajante/">
          <a target="_blank">
            <img className={classes.link}src="/static/assets/facebook-logo.svg"/>
          </a>
        </Link><Link href="https://www.facebook.com/eaiviajante/">
          <a target="_blank">
            <img className={classes.link}src="/static/assets/facebook-logo.svg"/>
          </a>
        </Link>
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
)}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)