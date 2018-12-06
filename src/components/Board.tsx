/** @jsx jsx */
import { jsx } from '@emotion/core'
import { RouteComponentProps } from '@reach/router'
import React from 'react'

interface BoardProps extends RouteComponentProps {
  boardId?: string
}

const Board: React.FunctionComponent<BoardProps> = ({ boardId }) => {
  return (
    <div
      css={{
        color: 'red',
      }}
    >
      {boardId}
    </div>
  )
}

export default Board
