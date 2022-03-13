import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Plans from '../components/Plans';
import { auth } from '../firebase';
import netflixAvatar from "../Images/bigAvatar.jpg";
import { NetflixButtonLogin } from '../styled/styledcomponents';


const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate()

  const signOut = () => {
      auth.signOut();
      navigate("/login")
  }

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant='h3'>Editar Perfil</Typography>
      <div className={classes.info}> 
          <img src={netflixAvatar} alt='avatar' />
            <div className={classes.details}>
                <div className={classes.plans}>
                  <Typography variant="h6">email usuario</Typography>
                  <Typography className={classes.plansText} variant="h5" gutterBottom>Planes</Typography>
                  <Plans cost={379}>Netflix basico</Plans>
                  <Plans cost={639}>Netflix estándar</Plans>
                  <Plans wide="medium" color="gray" cost={939}>Netflix premium</Plans>
                  <NetflixButtonLogin wide="fullWidth" onClick={signOut}>Cerrar sesión</NetflixButtonLogin>
                </div>
            </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "100%", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "43%",
    display: "flex",
    "& img" : {
      height: "100px",
      [theme.breakpoints.down("sm")] : {
        display: "none",
      }
    }
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  plansText: {
    borderBottom: "1px solid lightgray",
  },
}))

export default Profile