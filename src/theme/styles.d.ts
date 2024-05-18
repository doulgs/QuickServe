import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    Colors: {
      Primary: string;
      Secondary: string;

      Background: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    Size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    Elevation: number;
  }
}
