import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff;",
  fontColor: "hsl(0, 0, 100%)",
};

export const darkTheme = {
  body: "#e5a27e",
  fontColor: "blue",
};

export const purpleTheme = {
  body: "hsl(268, 75%, 9%)",
  fontColor: "yellow",
};

export const GlobalStyles = createGlobalStyle`
body {
    background-color:${(props) => props.theme.body};
}
`;
