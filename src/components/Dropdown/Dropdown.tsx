import './Dropdown.css'

export interface DropdownProps extends React.PropsWithChildren {
  visualise?: boolean
  className: string
}

const Dropdown = ({
  children,
  visualise=true,
  className,
}: DropdownProps) => {
  return (
    <button className={`${className} dropdown ${visualise ? 'dropdown--visualise': ''}`}>
      { children }
    </button>
  )
}

export default Dropdown