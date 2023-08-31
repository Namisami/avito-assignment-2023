import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/App';
import Navbar from '@components/Navbar/Navbar';
import Container from '@components/Container/Container';
import Carousel from '@components/Carousel/Carousel';
import Loader from '@components/Loader/Loader';
import Error from '@components/Error/Error';
import { RootState } from '@/store';
import { fetchGameById, setGameInfo } from '@store/slices/gamesSlice';
import './Game.css';

export type GameInfoType = {
  id: string
  title: string
  thumbnail: string
  short_description: string
}

const Game = () => {
  const gameInfo = useAppSelector((state: RootState) => state.gameInfo)
  const gameInfoIsLoading = useAppSelector((state: RootState) => state.gameInfoIsLoading)
  const gameInfoError = useAppSelector((state: RootState) => state.gameInfoError)
  const dispatch = useAppDispatch()

  const params = useParams();
  const gameId = params.gameId;

  useEffect(() => {
    if (typeof gameId !== 'undefined') {
      dispatch(fetchGameById(gameId))
    }
    return () => {
      dispatch(setGameInfo({}))
    }
  }, [])
  
  const screenshots = gameInfo.screenshots ? 
        gameInfo.screenshots.map((screenshot: { image: string}) => {
    return screenshot.image
  }) : []

  const requirements = gameInfo.minimum_system_requirements ? Object.keys(gameInfo.minimum_system_requirements).map((key: string) => {
      return (
        <div className='table__item' key={ key }>
          <p className='table__title'>{ key.toLocaleUpperCase() }</p>
          <p className='table__value'>{ (gameInfo.minimum_system_requirements as any)[key] }</p>
        </div>
      )
  }) : (
    <div className='table__item'>
      <p className='table__value'>Browser</p>
    </div>
  )

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='main'>
        <Container>
          { gameInfoIsLoading ?
            <Loader /> :
            Object.keys(gameInfoError).length === 0 ?
            <div className='main__game game'>
              <div className="game__left">
                <img className='game__image' src={ gameInfo.thumbnail }></img>
                <h2 className="game__subtitle">Additional Information</h2>
                <div className="game__table table">
                  <div className="table__item">
                    <p className="table__title">RELEASE DATE</p>
                    <p className='table__value'>{ new Date(gameInfo.release_date).toDateString().split(' ').slice(1).join(' ') }</p>
                  </div>
                  <div className="table__item">
                    <p className="table__title">DEVELOPER</p>
                    <p className='table__value'>{ gameInfo.developer }</p>
                  </div>
                  <div className="table__item">
                    <p className="table__title">PUBLISHER</p>
                    <p className='table__value'>{ gameInfo.publisher }</p>
                  </div>
                  <div className="table__item">
                    <p className="table__title">DEVELOPER</p>
                    <p className='table__value'>{ gameInfo.genre }</p>
                  </div>
                </div>
                <h2 className="game__subtitle">Minimum System Requirements</h2>
                <div className="game__table table">
                  { requirements }
                </div>
              </div>
              <div className="game__right">
                <h1 className='game__title'>{ gameInfo.title }</h1>
                <Link to={ '/' } className="game__return">Обратно к списку игр</Link>
                <h2 className="game__subtitle">Description</h2>
                <p className='game__description'>{ gameInfo.description }</p>
                <h2 className="game__subtitle">Screenshots</h2>
                <Carousel className='game__carousel' items={ screenshots }/>
              </div>
            </div> :
            <Error />
          }
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

export default Game