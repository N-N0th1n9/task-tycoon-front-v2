const DefaultTaskPreview = props => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="102"
    height="102"
    fill="none"
    viewBox="0 0 102 102"
    {...props}
  >
    <rect width="100" height="100" x="1" y="1" fill="#fff" rx="8"></rect>
    <rect width="100" height="100" x="1" y="1" stroke="#C1C1C1" rx="8"></rect>
    <path stroke="#828282" d="M17.5 18.5h67v20h-67z"></path>
    <path fill="#828282" stroke="#828282" d="M24.5 25h7v7h-7z"></path>
    <path fill="#828282" d="M17.5 41.5h67v19h-67z"></path>
    <path stroke="#828282" d="M17.5 41.5h67v19h-67z"></path>
    <path fill="#EFEFEF" d="M24 47h8v8h-8z"></path>
    <path stroke="#828282" d="M17.5 63.5h67v20h-67z"></path>
    <path fill="#828282" stroke="#828282" d="M24.5 70h7v7h-7z"></path>
  </svg>
)
export default DefaultTaskPreview
