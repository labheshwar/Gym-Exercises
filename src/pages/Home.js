import React from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodypart, setBodypart] = React.useState("all");
  const [exercises, setExercises] = React.useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodypart={bodypart}
        setBodypart={setBodypart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodypart={bodypart}
      />
    </Box>
  );
};

export default Home;
