const style = `
  button {
    font-size: 1.35em;
    border-width: 4px;
  }

  & .provider-btn {
    width: 12.5em;
  }

  & .navigation-bar {
    font-size: .9em;

    & button {
      margin: .5em 3em 0em 0em;
      font-size: 1em;
    }
  }

  & .container-main {
    margin: calc(27.5vh - 5em) 5%;
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

  & .wallet-btn {
    margin-left: 20px;
    margin-top: -125px;
    border-radius: 100px;
    font-size: 1em;
  }

  & .table-column {
    border-top-style: solid;
    border-top-width: 3px;
    padding: 1em 0em 2em 0em;
  }

  & .table-btn {
    font-size: 1.25em;
    width 7.5em;
  }

  & .warning-flag {
    margin-bottom: 2.5em;
  }

`

export default style
