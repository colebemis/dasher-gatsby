/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Router } from '@reach/router'
import { Fragment } from 'react'
import Board from '../components/Board'
import GlobalStyles from '../components/GlobalStyles'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

const Index: React.FunctionComponent<{}> = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Home path="/" />
        <Board path="/board/:boardId" />
        <NotFound default={true} />
      </Router>
    </Fragment>
  )
}

export default Index
