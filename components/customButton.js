import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    width: '70vw', // Overrides inline-style
    height: '70vw',
    [theme.breakpoints.up('lg')]: {
      width: 400,
      height: 400,
      // Overrides inline-style
    },
  },
  disabled: {
    color: "grey",
    opacity: 0.7,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center',
  },

  text: {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    }

  },

  image: {
    position: 'absolute',
    left: '2vw',
    right: '2vw',
    marginTop: '2vh',
    [theme.breakpoints.up('lg')]: {
      height: 350,
    width: 350,
    },
    [theme.breakpoints.down('md')]: {
      top: 0,
      left: '3vh',
      right: '3vh',
      bottom: '6vh',
    }
  },
});


class CustomButton extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { classes, image, children, onClick } = this.props;
    return (
      <div className={classes.root}>
        <ButtonBase
          disableRipple
          classes={{disabled: classes.disabled}}
          style={{ width: "100%", height: "100%" }}
          onClick={onClick}
          {... this.props}
        >
          <Paper className={classes.paper}>
          <div className={classes.image}>
            <span className={classes.imageSrc} style={{ backgroundImage: `url(${image}` }} />
            </div>
            <h3 className={classes.text}> {children} </h3>
          </Paper>

          {/* <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image})`,
            }}
          /> */}
          {/* 
            <Typography
              component="span"
              variant="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
            </Typography>
          */}
        </ButtonBase>
      </div>
    );
  }
}

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
  image: PropTypes.string,
};

export default withStyles(styles)(CustomButton);