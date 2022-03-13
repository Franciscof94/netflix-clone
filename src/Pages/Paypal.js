import { makeStyles } from '@material-ui/core';
import React from 'react'


const Paypal = () => {
  const classes = useStyles();
  return (
    <div>Paypal</div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    /* backgroundColor: "#111", */
    minHeight: "100vh",
  }
}))

export default Paypal