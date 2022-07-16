export default `
  & button {
    font-size: 1.1em;
    border-width: 3px;
  }

  & .navigation-bar {
    font-size: 1em;

    & button {
      margin: .5em 2em 0em 0em;
    }
  }

  & .provider-account {
    margin-right: 50px;
    float: left;
  }

  & .wallet-btn {
    margin-left: 20px;
    margin-top: -95px;
    border-radius: 100px;
    font-size: .75em;
  }

  & .provider-btn {
    width: 20em;
  }

  & .container-main {
    margin: calc(27.5vh - 5em) 20%;
    padding: 3em 4em;
  }

  & .wrapper-content {
    & img {
      margin-left: 45px;
    }

    & span {
      margin-left: -30px;
    }
  }

  & .pool-redemptions {
    display: table;

    & .table-column {
      display: table-cell;
      width: 150px;
    }
  }

  & .table-btn {
    font-size: .875em;
    width 7.5em;
  }

  & .warning-flag {
     float: left;
     margin-top: -25px;
     width: 300px;
   }
`
