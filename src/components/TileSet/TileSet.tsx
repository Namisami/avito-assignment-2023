import { Link } from 'react-router-dom';
import './TileSet.css';

export interface TileSetProps {
  items: {
    id: string
    title: string
    thumbnail: string
    short_description: string
  }[]
}

const TileSet = ({
  items,
}: TileSetProps) => {
  const tiles = items?.map(item => {
    return (
      <Link className='tileset__tile tile' key={ item.id } to={ `games/${item.id}` }>
        <img className='tile__image' src={ item.thumbnail } alt={ item.short_description } />
        <div className="tile__info">
          <p className='tile__title'>{ item.title }</p>
          <p className='tile__description'>{ item.short_description }</p>
        </div>
      </Link>
    )
  })
  return (
    <div className="tileset">
      { tiles ? tiles : 'По вашему запросу ничего не найдено' }
    </div>
  )
}

export default TileSet