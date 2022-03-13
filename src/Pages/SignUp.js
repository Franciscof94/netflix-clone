import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { NetflixButtonLogin, NetflixInput } from '../styled/styledcomponents';


const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
      .then((authUser) => navigate("/"))
      .catch((err) => alert(err.message))    
  }

  const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .then(authUser => navigate("/")) 
      .catch(err => alert(err.message))
  }
   
  return (
    <div className={classes.root}>
       <Typography variant='h5' align='left'> 
            Iniciar sesión
       </Typography>
       <form className={classes.form}>
         <NetflixInput 
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             radius
             placeholder="Email"
             className={classes.email}/>
         <NetflixInput 
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             radius 
             placeholder="Password" 
             className={classes.password}/>
         <NetflixButtonLogin onClick={signIn}
             type="submit"
             radius 
             wide="medium">
             Iniciar sesión
             </NetflixButtonLogin>
         <Typography variant='subtitle2'>
            Nuevo en netflix?{""}
            <span 
                className={classes.signupLink}
                onClick={register}
                >       
                Regístrate ahora.{""}
            </span>
         </Typography>
       </form>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "350px",
      width: "20rem",
      height: "25rem",
      background: "rgba(0,0,0,0.65)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    form: {
      width: "80%",
    },
    email: {
      marginBottom: theme.spacing(2),
    },
    password: {
      marginBottom: theme.spacing(4),
    },
    signupLink: {
      color: "fff",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  }))

export default SignUp