import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import useStyles from "./styles";

import {
  Navbar,
  Movies,
  MovieInformation,
  Profile,
  Actors,
} from "./components";

import useAlan from "./components/Alan";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route index path="/" element={<Movies />} />
          <Route index path="/approved" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer}></div>
    </div>
  );
};

export default App;
