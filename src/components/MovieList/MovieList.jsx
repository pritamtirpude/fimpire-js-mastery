import React from "react";
import { Grid } from "@mui/material";

import useStyles from "./styles";

import { Movie } from "../../components";

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const classes = useStyles();
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, index) => (
        <Movie key={index} movie={movie} idx={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
