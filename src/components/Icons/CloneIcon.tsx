import { Icon } from "@types/Icon"

const CloneIcon = ({
  width=18, height=18
}: Icon) => {
  return (
    <svg viewBox="0 0 512 512" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg">
      <path d="M128 304V160H64C28.65 160 0 188.7 0 224v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-64H208C163.8 384 128 348.2 128 304zM448 0H224C188.7 0 160 28.65 160 64v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C512 28.65 483.3 0 448 0z"/>
    </svg>
  )
}

export default CloneIcon