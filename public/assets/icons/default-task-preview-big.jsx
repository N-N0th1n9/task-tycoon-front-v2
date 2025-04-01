import * as React from 'react'

const DefaultTaskPreviewBig = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={102}
    height={102}
    fill='none'
    {...props}
  >
    <rect
      width={100}
      height={100}
      x={1}
      y={1}
      fill='#fff'
      rx={8}
    />
    <rect
      width={100}
      height={100}
      x={1}
      y={1}
      stroke='#C1C1C1'
      rx={8}
    />
    <path
      stroke='#828282'
      d='M17.5 18.5h67v20h-67z'
    />
    <path
      fill='#828282'
      stroke='#828282'
      d='M24.5 25h7v7h-7z'
    />
    <path
      fill='#828282'
      d='M17.5 41.5h67v19h-67z'
    />
    <path
      stroke='#828282'
      d='M17.5 41.5h67v19h-67z'
    />
    <path
      fill='#EFEFEF'
      d='M24 47h8v8h-8z'
    />
    <path
      stroke='#828282'
      d='M17.5 63.5h67v20h-67z'
    />
    <path
      fill='#828282'
      stroke='#828282'
      d='M24.5 70h7v7h-7z'
    />
  </svg>
)
export default DefaultTaskPreviewBig
