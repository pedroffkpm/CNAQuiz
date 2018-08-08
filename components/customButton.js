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
  },

  image: {
    position: 'absolute',
    left: '2vw',
    right: '2vw',
    marginTop: '2vh',
    height: 325,
    [theme.breakpoints.down('md')]: {
      marginTop: '3vh',
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
          focusRipple
          key={0}
          focusVisibleClassName={classes.focusVisible}
          style={{ width: "100%", height: "100%" }}
          onClick={onClick}
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