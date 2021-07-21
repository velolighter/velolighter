import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      gray: string;
      whiteGray: string;
      white: string;
      pointColor: string;
      red: string;
    };
    font: {
      medium: string;
      bold: string;
      pointColor: string;
    };
  }
}
