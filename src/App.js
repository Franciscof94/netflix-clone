import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Paypal from "./Pages/Paypal";
import Home from "./Pages/Home";
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => { 
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth) {
            dispatch(login({
                uid: userAuth.uid,
                email: userAuth.email,
            })) 
            } else {
              dispatch(logout)
        }
      })
      return unsubscribe;
  }, [dispatch])

  
  return (
    <div className={classes.root}>
     <Router>
            <Routes>
              <Route path='/login' element={<Login />}>
              </Route>
              <Route path='/profile' element={<Profile />}>
              </Route>
              <Route path='/checkout' element={<Paypal />}>
              </Route>
              <Route path='/' element={<Home />}>  
              </Route>
            </Routes>
    </Router> 
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
    minHeight: "100vh",
  }
}))

export default App;
