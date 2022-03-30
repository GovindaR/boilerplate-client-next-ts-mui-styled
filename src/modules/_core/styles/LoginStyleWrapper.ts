// import { styled } from "@mui/material/styles";
import styled from "styled-components";

export const LoginStyleWrapper = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.background.default,
  ".title": {
    color: theme.palette.common.black,
  },
  ".button-signIin": {
    width: "50%",
  },
}));
