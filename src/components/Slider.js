import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { getMarsRoverPhotos } from "../services/generalService";
import { useDispatch } from "react-redux";
import { setItemId } from "../redux/item";

const marks = [
  {
    value: 0,
    label: "Asteroids",
  },
  {
    value: 33,
    label: "Exoplanets",
  },
  {
    value: 66,
    label: "Mars rover",
  },
  {
    value: 100,
    label: "Outter space",
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSliderValues() {
  const dispatch = useDispatch();
  function handleValue(value) {
    dispatch(setItemId(value));
  }

  return (
    <Box sx={{ width: "75%" }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={33}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        color="secondary"
        onChange={(e) => handleValue(e.target.value)}
      />
    </Box>
  );
}
