import { CarsContainer } from "../src/components/CarsContainer";
import { StyleProvider, ThemePicker } from "vcc-ui";

import React from "react";

const HomePage = () => {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <CarsContainer />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
};

export default HomePage;
