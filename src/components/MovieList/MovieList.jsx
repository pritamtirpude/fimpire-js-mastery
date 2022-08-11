import React from "react";
import { Grid } from "@mui/material";

import useStyles from "./styles";

import { Movie } from "../../components";

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, index) => (
        <Movie key={index} movie={movie} idx={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
