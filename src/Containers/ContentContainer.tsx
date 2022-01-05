import React from "react";
import { IPageProps } from "../shared/interfaces";
import { HomeStyle } from "../shared/styles";

const ContentContainer = (props: IPageProps) => {
  return (
    <HomeStyle>
      <h2>CATHY D'ONOFRIO</h2>
      <p>software engineer based in brooklyn, new york.</p>
    </HomeStyle>
  );
};

export default ContentContainer;
