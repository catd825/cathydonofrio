import React from "react";
import { SiReact } from "react-icons/si";
import { SiRails } from "react-icons/si";
import { IPageProps } from "../shared/interfaces";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardLink,
  CardText,
  CardTitle,
  Wrapper
} from "../shared/styles";

const ProjectsContainer = (props: IPageProps) => {
  const { setPage } = props;
  return (
    <>
      <Wrapper>
        <h3>PROJECTS</h3>
        <br />
        <p className="left">
          Featured projects from Flatiron are below. All projects are available
          on{" "}
          <b>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/catd825/"
            >
              Github
            </a>
            .
          </b>
        </p>
        <CardGroup>
          <Card className="padding">
            <CardImg src="https://j.gifs.com/915YWB.gif" alt="budgetBuddy" />
            <CardBody>
              <CardTitle>budgetBuddy</CardTitle>
              <CardText>
                A simple way to create and modify monthly budgets and
                transactions. This is a capstone project for the Flatiron
                School.
              </CardText>
              <CardText>
                <CardTitle>Technologies Used:</CardTitle>
                <SiReact size={30} />
                &nbsp;&nbsp;
                <SiRails size={30} />
              </CardText>
              <CardLink
                href="https://youtu.be/xrYvw2IYEmI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </CardLink>{" "}
              |{" "}
              <CardLink
                href="https://github.com/catd825/budgetBuddy_frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </CardLink>
            </CardBody>
          </Card>

          <Card className="padding">
            <CardImg
              src="https://j.gifs.com/L7oDK4.gif"
              alt="feelingsOverflow"
            />
            <CardBody>
              <CardTitle>feelingsOverflow</CardTitle>
              <CardText>
                Forum-based app in which users post, comment, and vote on mental
                health questions and concerns.
              </CardText>
              <CardText>
                <CardTitle>Technologies Used:</CardTitle>
                <SiReact size={30} />
                &nbsp;&nbsp;
                <SiRails size={30} />
              </CardText>
              <CardLink
                href="https://youtu.be/FfzPzYYGqw0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </CardLink>{" "}
              |{" "}
              <CardLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/catd825/feelingsOverflow-front-end"
              >
                Github
              </CardLink>
            </CardBody>
          </Card>

          <Card className="padding">
            <CardImg src="https://j.gifs.com/NLqWyN.gif" alt="fluffy tail" />
            <CardBody>
              <CardTitle>Fluffy Tail</CardTitle>
              <CardText>
                Fluffy tail is a Ruby on Rails app that allows you to browse and
                favorite pets to adopt in the NY Metro area.
              </CardText>
              <CardText>
                <CardTitle>Technologies Used:</CardTitle>
                <SiRails size={30} />
              </CardText>
              <CardLink
                href="https://youtu.be/scLpLe3zIxI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </CardLink>{" "}
              |{" "}
              <CardLink
                href="https://github.com/catd825/fluffy_tail"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </CardLink>
            </CardBody>
          </Card>
        </CardGroup>
        <Button onClick={() => setPage("default")}>return to main</Button>
      </Wrapper>
    </>
  );
};

export default ProjectsContainer;
