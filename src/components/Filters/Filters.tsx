import { createContext, useState, useEffect } from 'react';
import {  useAppDispatch } from '@/App';
import Filter from '@components/Filter/Filter';
import { fetchGamesListWithParametres } from '@store/slices/gamesSlice';
import './Filters.css'


export type FilterValuesType = {
  platform: string
  genre: string
  sort: string
}

export interface FiltersContextType {
  filterValues: FilterValuesType
  setFilterValues: React.Dispatch<React.SetStateAction<FilterValuesType>>
}

export const FiltersContext = createContext<FiltersContextType>({} as FiltersContextType);

export interface FiltersProps extends React.PropsWithChildren {
  // onFiltersChange: (filter: FilterValuesType) => void
}

const Filters = ({
  children,
  // onFiltersChange
}: FiltersProps) => {
  const dispatch = useAppDispatch()

  const [filterValues, setFilterValues] = useState<FilterValuesType>({
    platform: 'All Platforms',
    genre: 'All Genres',
    sort: 'Relevance'
  })
  useEffect(() => {
    dispatch(fetchGamesListWithParametres(filterValues))
    // onFiltersChange(filterValues)
  }, [filterValues])
  return (
    <div className='filters'>
      <FiltersContext.Provider value={{ filterValues, setFilterValues }}>
        { children }
      </FiltersContext.Provider>
    </div>
  )
}

Filters.Platform = () => {
  return (
    <Filter className='filters__filter' name="platform" options={
      [
        'All Platforms', 'Windows (PC)', 'Browser(Web)'
      ]
    }>
      Platform:
    </Filter>
  )
}

Filters.Genre = () => {
  return (
    <Filter className='filters__filter' name="genre" options={
      [
        'All Genres', 'MMO', 'MMORPG', 'Shooter', 'Strategy', 'Moba', 'Racing', 'Sports', 'Social', 'Sandbox', 'Open World', 'Survival', 'Pvp', 'Pve', 'Pixel', 'Voxel', 'Zombie', 'Turn Based', 'First Person View', 'Third Person View', 'Top Down View', 'Tank', 'Space', 'Sailing', 'Side Scroller', 'Superhero', 'Permadeath', 'Card', 'Battle Royale', 'MMOFPS', 'MMOTPS', '3D Graphics', '2D Graphics', 'Anime', 'Fantasy', 'Sci-Fi', 'Fighting', 'Action RPG', 'Action', 'Military', 'Martial Arts', 'Flight', 'Low Spec', 'Tower Defense', 'Horror', 'Mmorts'
      ]
    }>
      Genre/Tag:
    </Filter>
  )
}

Filters.Sort = () => {
  return (
    <Filter className='filters__filter' name="sort" options={
      ['Relevance', 'Popularity', 'Release Date', 'Alphabetical']
    }>
      Sort by:
    </Filter>
  )
}

export default Filters