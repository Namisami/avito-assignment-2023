import { Icon } from "../../types/Icon"

const MoreIcon = ({
  width=24, height=24
}: Icon) => {
  return (
    <svg height={ height } width={ width } version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <g>
          <circle cx="8" cy="16" r="3"/>
          <circle cx="16" cy="16" r="3"/>
          <circle cx="24" cy="16" r="3"/>
      </g>
    </svg>
  )
}

export default MoreIcon