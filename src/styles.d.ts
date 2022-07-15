import { ReactNode } from 'react'
import 'styled-components'

declare module 'styled-components' {
  export interface RwdParams {
    navigation: {
      dimensions: {
        height: string;
        width: string;
        fontSize: string;
      },
      button: {
        margin: string
        borderRadius: string;
      }
    },
    container: {
      margin: string;
      height: string;
      padding: string;
      fontSize: string;
      borderRadius: string;
      width: string;
    }
    identicon: {
      boxShadow: string;
      borderRadius: string;
      circumference: number;
    }
  }
  export interface DefaultProps {
    children?: ReactNode | ReactNode[];
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    fontSize?: string;
    borderRadius?: string;
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
