
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { Component } from 'react';
import subscribeToNewsletter from '../components/help/mailchimpHelp'

const styles = theme => ({
    root: {
        flexGrow: 1,
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
        marginTop: '5vw',
        marginBottom: '2vw',
        width: '100%',
        paddingTop: '0',
        lineHeight: '1.15',
        textAlign: 'center',
        fontSize: '48px',
    },
});

const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)\b/;

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = { error: true, email: '', value: props.value };
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await subscribeToNewsletter(this.state.email);

    };

    onChange(event) {
        let newState = Object.assign({}, this.state);
        newState.email = event.target.value;
        if (emailRegEx.test(event.target.value)) {
            newState.error = false;
        } else if (event.target.value === "") {
            newState.error = true;
        } else {
            newState.error = true;
        }

        this.setState(newState);
    };

    render() {
        const { classes } = this.props;
        
        console.log(this.props.id)
        return (
            <div className={classes.root}>
                <Grid container spacing={40} direction={"column"} justify={"center"} alignItems={"center"}>
                    <form onSubmit={this.onSubmit}>
                        <Grid item xs>
                            <h2 className={classes.title}> Quase lá! </h2>
                        </Grid>
                        <Grid item xs>
                            <h3 style={{ marginTop: '10vw', marginBottom: '2vw', fontFamily: 'Arial' }}>
                                Cadastre o seu e-mail para ficar por dentro de todas as nossas novidades!
                </h3>
                        </Grid>
                        <Grid item xs>
                            <div style={{ marginLeft: '4vw', marginRight: '4vw' }}>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder="exemplo@exemplo.com"
                                    label="Email"
                                    type="email"
                                    error={this.state.error}
                                    onChange={this.onChange.bind(this)}
                                    value={this.state.email}
                                    style={{ marginTop: '2%' }}
                                />
                            </div>
                        </Grid>
                        <Grid container direction={'row'} justify={"center"} alignItems={"center"}>
                            <Grid item xs={2}>
                                <Link as={`/result/${this.props.id}`} href={`/result?id=${this.props.id}`}>
                                    <Button variant="extendedFab" type="submit" style={{ marginTop: '2vw' }} disabled={this.state.error}>
                                        Inscrever </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>
        );
    }

}

Subscribe.propTypes = {
    classes: PropTypes.object.isRequired,
};

Subscribe.getInitialProps = async (context) => {
    const { id } = context.query

    return { id }
}

export default withStyles(styles)(Subscribe)