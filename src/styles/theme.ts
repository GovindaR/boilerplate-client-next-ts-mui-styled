import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/system";
import { darkPalette, lightPalette } from "./palette";
// import { red } from '@mui/material/colors';
export type customInitialProps = {
  rtl?: boolean;
  darkTheme?: boolean;
};

export type ThemeExtended = customInitialProps;
// export type ThemeExtended = Theme & customInitialProps;
// Create a theme instance.
export default function theme({
  rtl = false,
  darkTheme = false,
}: ThemeExtended) {
  let palette = darkTheme ? darkPalette : lightPalette;
  let styles = {
    dir: rtl ? "rtl" : "ltr",
    direction: rtl ? "rtl" : "ltr",
    palette,
    typography: {
      fontFamily: [
        // "Tajawal",
        rtl ? "Almarai" : "Roboto",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      button: {
        textTransform: "capitalize",
      },
      // useNextVariants: true,
    },
    overrides: {
      MuiDivider: {
        root: {
          height: "3px",
        },
      },
      MuiButton: {
        root: { textTransform: "uppercase" },
      },
    },
  };
  return createTheme({ ...styles } as any); // TS_FIX_ME
}
