import styled, { DefaultProps } from 'styled-components'

export const ImageTextWrapper = styled.div<DefaultProps>`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 35px;
    margin-right: auto;
    float: left;
  }

  & span {
    align-text: left;
    margin-right: auto;
  }
`

export const CenteredWrapper = styled.div<DefaultProps>`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`
