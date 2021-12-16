// import { styled } from "@mui/system";
import styled from "styled-components";

export const HomepageStyleWrapper = styled("div")(({ theme }) => ({
  ".container": {
    minHeight: "100vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "800px",
    margin: "auto",
  },
  ".main": {
    flex: 1,
    width: "100%",
    display: "flex",
    padding: "5rem 0",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ".footer": {
    width: "100%",
    height: "100px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
    },
  },
  ".title": {
    margin: 0,
    lineHeight: 1.15,
    fontSize: "4rem",
    "& a": {
      color: "#0070f3",
      textDecoration: "none",
      "&:hover,&:focus,&:active ": {
        textDecoration: "underline",
      },
    },
  },

  ".description": {
    textAlign: "center",
    lineHeight: "1.5",
    fontSize: "1.5rem",
  },
  ".code": {
    background: "#fafafa",
    borderRadius: "5px",
    padding: "0.75rem",
    fontSize: "1.1rem",
    fontFamily:
      "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace",
  },
  ".codeAlternativeBg": {
    background: "#6a6a6a",
  },
  ".grid": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "800px",
    marginTop: "3rem",
  },
  ".card": {
    margin: "1rem",
    padding: "1.5rem",
    textAlign: "left",
    color: "inherit",
    textDecoration: "none",
    border: "1px solid #eaeaea",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",
    width: "45%",
  },
  ".div-dispatch": {
    width: "100%",
  },
}));
