import React from "react";
// import { Button } from "reactstrap";
import { Left } from "../styles";
import { IPageProps } from "../shared/interfaces";
import styled from "@emotion/styled";

const AboutStyle = styled.div({
  width: "75%",
  margin: "50px auto 100px auto"
});

const About = (props: IPageProps) => {
  const { setPage } = props;
  return (
    <>
      <AboutStyle>
        <h3>ABOUT CATHY</h3>
        <Left>
          Hello! I'm Cathy D'Onofrio, full stack software engineer based in
          Brooklyn, NY. Passionate about mission-driven companies, I proudly
          work at insurtech startup{" "}
          <a
            href="http://www.sayrhino.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rhino
          </a>
          , which creates more choices for renters regarding security deposits.
        </Left>
        <Left>
          At Rhino, I primarily work with React with Typescript on the front
          end, and Ruby on Rails on the backend. I was fortunate to have learned
          most of this when I studied at the Flatiron School in 2020. I
          additionally learned the principles of object oriented programming and
          Vanilla Javascript. I've also dabbled in other languages and
          frameworks, including NodeJS/Express (
          <a href="https://medium.com/javascript-in-plain-english/creating-a-financial-app-with-the-plaid-api-nodejs-express-and-react-4e142066eb6c?source=friends_link&sk=ae4a53090618e6c9073f6bbb968ae18b">
            see project here
          </a>
          ) and NextJS.
        </Left>
        <Left>
          Before I went to Flatiron, I worked as a finance manager in the
          advertising industry for a decade. I utilized and grew my analytical
          and communication skills and learned how to work collaboratively in a
          very fast-paced environment.
        </Left>
        <Left>
          Learning to code was always a goal of mine. Having loved HTML and CSS
          in high school, I began to learn JavaScript and Ruby through
          Codecademy and Flatiron prework. In early 2020, I made the big
          decision to leave my steady career and begin a newer exciting one with
          tons of opportunity.
        </Left>

        <Left>
          In my downtime, I love cooking, reading, exploring New York City
          (where I've lived since 2009), and traveling (when safe to do so!)
        </Left>
        <button
          onClick={() => setPage("default")}
        >
          return to main
        </button>
      </AboutStyle>
    </>
  );
};

export default About;
