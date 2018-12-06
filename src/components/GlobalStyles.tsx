/** @jsx jsx */
import { Global, jsx } from '@emotion/core'

const GlobalStyles: React.FunctionComponent<{}> = () => {
  return (
    <Global
      styles={{
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
        body: {
          boxSizing: 'border-box',
          margin: 0,
          fontFamily: 'system-ui',
        },
      }}
    />
  )
}

export default GlobalStyles
