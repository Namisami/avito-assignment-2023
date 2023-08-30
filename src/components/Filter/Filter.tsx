import { useContext } from 'react'
import Dropdown from '@components/Dropdown/Dropdown'
import { FiltersContext } from '@components/Filters/Filters'
import './Filter.css'

export interface FilterProps extends React.PropsWithChildren {
  className?: string
  name: string
  options: string[]
}

const Filter = ({
  children,
  className,
  name,
  options
}: FilterProps) => {
  const { setFilterValues } = useContext(FiltersContext)
  return (
    <div className={`${className} filter`}>
      <label htmlFor={ name } className='filter__label'>
        { children }
      </label>
      <FiltersContext.Consumer>
        {({ filterValues }) => 
          <Dropdown id={ name } className='filter__item' 
            options={ options } 
            onDropdownChange={ current => setFilterValues({...filterValues, [name]: current}) 
          }>
            { filterValues[name as keyof typeof filterValues] }
          </Dropdown>
        }
      </FiltersContext.Consumer>
    </div>
  )
}

export default Filter