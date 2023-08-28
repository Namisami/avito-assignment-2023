import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGamesList } from '@store/slices/gamesSlice'
import Navbar from '@components/Navbar/Navbar'
import Container from '@components/Container/Container'
import TileSet from '@components/TileSet/TileSet'
import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, RootState } from '@store/index.ts'
import './App.css'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function App() {
  const games = useAppSelector((state) => state.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGamesList())
    console.log(games)
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='main'>
        <Container>
          <h1 className='main__title'>Browse for Games!</h1>
          <TileSet items={ games.slice(0, 10) }/>
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

export default App
