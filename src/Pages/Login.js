import { makeStyles, Typography } from '@material-ui/core';
import logo from "../Images/Netflix-Logo.wine.svg";
import HeroBanner from "../Images/initialBanner.jpg";
import { NetflixButtonLogin, NetflixButtonStart, NetflixInput } from '../styled/styledcomponents';
import { useState } from 'react';
import SignUp from "./SignUp";


const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt='logo' />
      <NetflixButtonLogin className={classes.session}>Iniciar sesión</NetflixButtonLogin>
      <div className={classes.info}> 
          {
              !signIn ? (<SignUp />) : (
              <>
                <Typography variant='h4' guttercBottom>
                Películas y series <br /> ilimitadas y mucho más.
                </Typography>
                <Typography variant='h5'>
                Disfruta donde quieras. Cancela cuando quieras.
                </Typography>
                <Typography variant='h6' gutterBottom>
                ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
                </Typography>
            <div className={classes.inputBlock}>
                <NetflixInput placeholder="Email"/>
                <NetflixButtonStart>Comenzar</NetflixButtonStart>
            </div>
            </>
              )
          }
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${HeroBanner})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "160px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontSize: "50px",
      fontWeight: "700",
    },
    "& h5": {
       fontWeight: 400,
       marginBottom: "18px"
    },
  },
  inputBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}))

export default Login