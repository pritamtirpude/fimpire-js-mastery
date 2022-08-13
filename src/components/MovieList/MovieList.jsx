import React from "react";
import { Grid } from "@mui/material";

import useStyles from "./styles";

import { Movie } from "../../components";

const MovieList = ({ movies, numberOfMovies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, index) => (
        <Movie key={index} movie={movie} idx={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
