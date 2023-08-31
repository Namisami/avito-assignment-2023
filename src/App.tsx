import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGamesList } from '@store/slices/gamesSlice'
import Navbar from '@components/Navbar/Navbar'
import Container from '@components/Container/Container'
import TileSet from '@components/TileSet/TileSet'
import Filters from '@components/Filters/Filters'
import Error from '@components/Error/Error'
import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, RootState } from '@store/index.ts'
import './App.css'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function App() {
  const games = useAppSelector((state) => state.gamesList)
  const gamesListError = useAppSelector((state) => state.gamesListError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGamesList())
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='main'>
        <Container>
        { Object.keys(gamesListError).length === 0 ?
          <>
            <h1 className='main__title'>Browse for Games!</h1>
            <Filters>
              <Filters.Platform />
              <Filters.Genre />
              <Filters.Sort />
            </Filters>
            <TileSet items={ games }/>
          </>:
            <Error />
        }
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

export default App
