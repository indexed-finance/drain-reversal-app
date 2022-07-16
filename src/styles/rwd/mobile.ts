export default `
  button {
    font-size: 1.35em;
    border-width: 4px;
  }

  & .provider-btn {
    width: 12.5em;
  }

  & .navigation-bar {
    font-size: .8em;

    & button {
      margin: .125em 1.5em 0em 0em;
    }
  }

  & .container-main {
    margin: calc(30vh - 3.75em) 5%;
    padding: 3em 1.5em;
  }

  & .wrapper-content {
    & img {
      margin-left: 7.5px;
    }

    & span {
      margin-left: 5px;
    }
  }

  .wallet-btn {
    margin-left: 20px;
    margin-top: -125px;
    border-radius: 100px;
    font-size: 1em;
  }

  .table-column {
    border-top-style: solid;
    border-top-width: 3px;
    padding: 1em 0em 2em 0em;
  }

  & .table-btn {
    font-size: 1.25em;
    width 7.5em;
  }

  & .warning-flag {
    position: absolute;
    right: 5%;
    left: 5%;
    margin: 2%;
    top: 10%;
  }

`
