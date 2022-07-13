import { ReactNode } from 'react'
import 'styled-components'

declare module 'styled-components' {
  export interface RwdParams {
    navigation: {
      height: string;
      width: string;
      fontSize: string;
    },
    container: {
      margin: string;
      height: string;
      padding: string;
      fontSize: string;
      width: string;
    }
  }
  export interface DefaultProps {
    children?: ReactNode;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    fontSize?: string;
    float?: string;
  }
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      ternary: string;
    }
    mobile: boolean;
    rwd: {
      true: RwdParams;
      false: RwdParams;
    };
  }

}
