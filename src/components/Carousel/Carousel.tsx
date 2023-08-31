import { useState } from 'react';
import './Carousel.css';

export interface CarouselProps {
  className: string
  items: string[]
}

const Carousel = ({
  className,
  items,
}: CarouselProps) => {
  const [current, setCurrent] = useState(1)

  const images = items.map((item: string) => {
    return (
      <img className='carousel__item' src={ item } key={ item } />
    )
  })

  const prevImage = () => {
    if (current - 1 > 0) {
      setCurrent(current - 1)
    }
  }

  const nextImage = () => {
    if (current + 2 < items.length) {
      setCurrent(current + 1)
    }
  }

  return (
    <div className={`${className} carousel`}> 
      { items.length > 3 &&
        <button
          className='carousel__nav carousel__nav--left'
          onClick={ prevImage }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
          </svg>
        </button>
      }
      <div 
        className="carousel__wrapper" 
        style={{ 
          transform: `translateX(${-33.333 * (current - 1)}%) translateX(${current >= 1 ? (current === 1 ? '0' : '-10') : '10'}px)` 
          }}
        >
        { images }
      </div>
      { items.length > 3 &&
        <button 
          className='carousel__nav carousel__nav--right' 
          onClick={ nextImage }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
          </svg>
        </button>
      }
    </div>
  )
}

export default Carousel;