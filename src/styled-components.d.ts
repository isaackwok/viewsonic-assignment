import "styled-components";
import * as theme from "./theme";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    [key: keyof typeof theme]: (typeof theme)[key];
  }
}
