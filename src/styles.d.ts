import { ReactNode } from 'react'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultProps {
    children?: ReactNode | ReactNode[];
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    fontSize?: string;
    borderRadius?: string;
    className?: string;
    float?: string;
  }
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      ternary: string;
    }
    mobile: boolean;
  }

}
