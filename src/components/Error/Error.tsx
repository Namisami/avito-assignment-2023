import { Link } from 'react-router-dom'
import Button from '@components/Button/Button'
import './Error.css';

const Error = () => {
  return (
    <>
      <div className="error-page">
        <p className='error-page__warning'>Sorry, something goes wrong! (check CORS)</p>
        <Button className='error-page__return' outline={ true } type='info'>
          <Link to={ '/' }>Return to game list</Link>
        </Button>
      </div>
    </>
  )
}

export default Error