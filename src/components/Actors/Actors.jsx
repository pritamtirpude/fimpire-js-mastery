import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetActorsInfoQuery } from "../../services/TMDB";

const Actors = () => {
  const { id } = useParams();

  const { data, isFetching, error } = useGetActorsInfoQuery(id);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  return (
    <div>
      <h1>Actors</h1>
    </div>
  );
};

export default Actors;
