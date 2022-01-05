import styled from "@emotion/styled";

export const AlignLeftDiv = styled.p({
  textAlign: "left"
});

export const Wrapper = styled.div({
  width: "75%",
  margin: "50px auto 100px auto",
  backgroundColor: "white",
  padding: '15px',
  "@media (min-width: 576px)": { padding: "40px" }
});

export const CardGroup = styled.div({
  "@media (min-width: 576px)": { display: "flex", flexFlow: "row wrap" },
  paddingBottom: "50px"
});

export const CardBody = styled.div({
  flex: "1 1 auto",
  minHeight: "1px",
  padding: "1.25rem"
});

export const Card = styled.div({
  flex: "1 0",
  marginBottom: "0",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minWidth: "0",
  wordWrap: "break-word",
  backgroundColor: "#fff",
  backgroundClip: "borderBox",
  border: "1px solid rgba(0,0,0,.125)",
  borderRadius: "0.25rem",
  color: "#505050",
  fontSize: "16px",
  padding: "0.5em"
});

export const CardImg = styled.img`
  flex: "1 0",
  marginBottom: "0",
  verticalAlign: "middle"
`;

export const CardText = styled.p({
  marginTop: "0",
  marginBottom: "1rem",
  boxSizing: "border-box"
});

export const CardTitle = styled.div({
  marginBottom: "0.75rem",
  color: "black",
  fontWeight: "bolder"
});

export const Button = styled.a({
  color: "#fff",
  backgroundColor: "#6c757d",
  borderColor: "#6c757d",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  verticalAlign: "middle",
  border: "1px solid transparent",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
  lineHeight: "1.5",
  borderRadius: "0.25rem",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
    color: "white",
    backgroundColor: "grey"
  }
});

export const CardLink = styled.a({
  fontWeight: "bolder",
  textDecoration: "none",
  wordWrap: "break-word",
  "&:hover": {
    textDecoration: "none",
    color: "black"
  }
});

export const HomeStyle = styled.div({
  paddingLeft: "15px",
  textAlign: "left",
  color: "white",
  display: "block",
  width: "50%",
  position: "fixed",
  bottom: "75px"
});

export const AboutImage = styled.img({
  "@media (min-width: 576px)": {
    float: "left",
    height: "500px",
    padding: "0px 20px 20px 0px"
  }
});
