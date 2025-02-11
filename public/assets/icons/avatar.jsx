const DefaultAvatar = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={100}
    height={99}
    fill='none'
    {...props}
  >
    <rect
      width={99}
      height={98}
      x={0.5}
      y={0.5}
      fill='#fff'
      rx={49}
    />
    <rect
      width={99}
      height={98}
      x={0.5}
      y={0.5}
      stroke='none'
      rx={49}
    />
    <mask
      id='a'
      width={100}
      height={100}
      x={0}
      y={-1}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <rect
        width={100}
        height={100}
        y={-1}
        fill='#D9D9D9'
        rx={50}
      />
    </mask>
    <g mask='url(#a)'>
      <rect
        width={32}
        height={32}
        x={34}
        y={24}
        stroke='currentColor'
        strokeWidth={4}
        rx={16}
      />
      <mask
        id='b'
        fill='#fff'
      >
        <path d='M14 90c0-13.255 10.745-24 24-24h24c13.255 0 24 10.745 24 24v9H14v-9Z' />
      </mask>
      <path
        fill='currentColor'
        d='M10 90c0-15.464 12.536-28 28-28h24c15.464 0 28 12.536 28 28h-8c0-11.046-8.954-20-20-20H38c-11.046 0-20 8.954-20 20h-8Zm76 9H14h72Zm-76 0v-9c0-15.464 12.536-28 28-28v8c-11.046 0-20 8.954-20 20v9h-8Zm52-37c15.464 0 28 12.536 28 28v9h-8v-9c0-11.046-8.954-20-20-20v-8Z'
        mask='url(#b)'
      />
    </g>
  </svg>
)
export default DefaultAvatar
