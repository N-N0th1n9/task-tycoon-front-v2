const DefaultTaskPreview = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={52}
    height={50}
    fill='none'
    {...props}
  >
    <rect
      width={50}
      height={49}
      x={1}
      y={0.5}
      fill='#fff'
      rx={5}
    />
    <rect
      width={50}
      height={49}
      x={1}
      y={0.5}
      stroke='#C1C1C1'
      rx={5}
    />
    <path
      stroke='#828282'
      d='M9.5 8.5h33v9h-33z'
    />
    <path
      fill='#828282'
      stroke='#828282'
      d='M12.5 11.5h3v3h-3z'
    />
    <path
      fill='#828282'
      d='M9.5 20.5h33v9h-33z'
    />
    <path
      stroke='#828282'
      d='M9.5 20.5h33v9h-33z'
    />
    <path
      fill='#EFEFEF'
      d='M12 23h4v4h-4z'
    />
    <path
      stroke='#828282'
      d='M9.5 32.5h33v9h-33z'
    />
    <path
      fill='#828282'
      stroke='#828282'
      d='M12.5 35.5h3v3h-3z'
    />
  </svg>
)
export default DefaultTaskPreview
