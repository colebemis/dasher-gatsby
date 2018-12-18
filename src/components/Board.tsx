/** @jsx jsx */
import { jsx } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import theme from '../theme'

interface BoardProps extends RouteComponentProps {
  boardId?: string
}

interface Board {
  id: string
  name: string
  query: string
}

const board: Board = {
  id: 'board-1',
  name: 'Board 1',
  query: 'org:github is:open is:pr',
}

const Board: React.FunctionComponent<BoardProps> = ({ boardId }) => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flexShrink: 0,
            padding: theme.space[9],
          }}
        >
          <h1
            css={{
              margin: `0 0 ${theme.space[1]}`,
              fontSize: theme.fontSizes[7],
              lineHeight: theme.lineHeights.tight,
            }}
          >
            {board.name}
          </h1>
          <span
            css={{
              fontFamily: theme.fonts.mono,
              color: theme.colors.grayAlpha[7],
            }}
          >
            {board.query}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Board
