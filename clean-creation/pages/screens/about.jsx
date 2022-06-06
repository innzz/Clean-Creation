import React from "react";
import CleanCreationsBatonRough from "../../components/About/cleanCreationsBatonRough";
import CrunchClean from "../../components/About/CrunchClean";
import CutDown from "../../components/About/CutDown";
import StopStressing from "../../components/About/StopStressing";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <CrunchClean />
        <CutDown />
        <StopStressing />
        <CleanCreationsBatonRough />
      </div>
    );
  }
}
