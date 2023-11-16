import React from "react";

import Display from "./Display";
import StartButton from "./StartButton";
import Stage from "./Stage";

import { createStage } from "../gameHelper";

const Tatris = () => {
  return (
    <div>
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tatris;
