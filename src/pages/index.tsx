/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Router } from '@reach/router'
import React from 'react'
import Board from '../components/Board'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

const Index: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <Home path="/" />
      <Board path="/board/:boardId" />
      <NotFound default />
    </Router>
  )
}

export default Index
