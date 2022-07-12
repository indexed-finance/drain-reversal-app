import { ReactNode } from 'react'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      ternary: string;
    }
  }
  export interface DefaultProps {
    children?: ReactNode | ReactNode[];
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
  }
}
