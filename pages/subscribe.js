
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import React, { Component } from 'react';
import subscribeToNewsletter from '../components/help/mailchimpHelp'

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
        newState["email"] = event.target.value;
        if (emailRegEx.test(event.target.value)) {
            newState["error"] = false;
        } else if (event.target.value === "") {
            newState["error"] = true;
        } else {
            newState["error"] = true;
        }

        this.setState(newState);
    };

    render() {
        return (
            <Grid container spacing={40} direction={"column"} justify={"center"} alignItems={"center"}>
                <form onSubmit={this.onSubmit}>
                    <Grid item xs>
                        <h2> Quase lá! </h2>
                    </Grid>
                    <Grid item xs>
                        <p> Cadastre o seu e-mail para ficar por dentro de todas as nossas novidades! </p>
                    </Grid>
                    <Grid item xs>
                        <TextField
                            required
                            placeholder="exemplo@exemplo.com"
                            label="Email"
                            type="email"
                            error={this.state.error}
                            onChange={this.onChange.bind(this)}
                            value={this.state.email}
                            style={{ marginTop: '2%' }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Button variant="raised" type="submit" className="button" style={{ marginTop: '5%' }} disabled={this.state.error}>
                            Inscrever </Button>
                    </Grid>
                </form>
            </Grid>
        );
    }

}

Subscribe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Subscribe)