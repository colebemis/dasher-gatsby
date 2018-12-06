/** @jsx jsx */
import { Global, jsx } from '@emotion/core'
import theme from '../theme'

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
          fontFamily: theme.fonts.sans,
          lineHeight: theme.lineHeights.normal,
          color: theme.colors.grayAlpha[9],
          backgroundColor: theme.colors.gray[1],
        },
      }}
    />
  )
}

export default GlobalStyles
