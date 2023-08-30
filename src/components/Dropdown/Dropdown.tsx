import { useEffect, useState } from 'react'
import './Dropdown.css'

export interface DropdownProps extends React.PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  visualise?: boolean
  options?: string[],
  onDropdownChange?: (current: string) => void
}

const Dropdown = ({
  className,
  children,
  visualise=true,
  options=[],
  onDropdownChange,
  ...restAttributes
}: DropdownProps) => {
  const [current, setCurrent] = useState(children)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof current === 'string' && onDropdownChange) {
      onDropdownChange(current)
    }
  }, [current])

  return (
    <button 
      className={`${className} dropdown ${visualise ? 'dropdown--visualise': ''} ${isOpen ? 'dropdown--open' : ''}`}
      onClick={ () => setIsOpen(!isOpen) }
      {...restAttributes} 
    >
      { current }
      <ul className="dropdown__menu">
        {
          options.map(option => 
            <li key={ option } className='dropdown__item' onClick={ () => setCurrent(option) }>
              { option }
            </li>
          )
        }
      </ul>
    </button>
  )
}

export default Dropdown