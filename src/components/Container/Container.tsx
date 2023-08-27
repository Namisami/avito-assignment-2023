import './Container.css'

const Container = ({
  children
}: React.PropsWithChildren) => {
  return (
    <div className='container'>
      { children }
    </div>
  )
}

export default Container