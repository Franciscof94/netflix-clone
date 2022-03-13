import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner.js';
import requests from '../Requests';
import Row from "../components/Row";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Banner />
      <Row title="ORIGINALES DE NETFLIX" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="MEJOR CLASIFICADA" fetchUrl={requests.fetchTopRated}/>
      <Row title="PELÍCULAS DE ACCIÓN" fetchUrl={requests.fetchActionMovies}/>
      <Row title="PELÍCULAS DE COMEDIA" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="PELÍCULAS DE TERROR" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="PELÍCULAS RÓMANTICAS" fetchUrl={requests.fetchCRomanceMovies}/>
      <Row title="DOCUEMNTALES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default Home