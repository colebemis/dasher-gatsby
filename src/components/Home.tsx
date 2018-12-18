/** @jsx jsx */
import { jsx } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import theme from '../theme'

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div css={{ padding: theme.space[9] }}>
      <h1 css={{ margin: 0 }}>Home</h1>
    </div>
  )
}

export default Home
