import styled from 'styled-components'

import { devices } from '../styles/breakpoints'

export default styled.div`
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

  @media ${devices.mobileS} {

    & img {
      margin-left: 7.5px;
    }

    & span {
      margin-left: 5px;
    }
  }


  @media ${devices.tablet} {

    & img {
      margin-left: 45px;
    }

    & span {
      margin-left: -30px;
    }

  }
`
