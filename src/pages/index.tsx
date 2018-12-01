import React from 'react'
import { Router } from '@reach/router'
import Home from '../components/Home'

const Index: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default Index
