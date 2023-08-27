import Button from '@components/Button/Button';
import Dropdown from '@components/Dropdown/Dropdown';
import MoreIcon from '@components/Icons/MoreIcon';
import Container from '@components/Container/Container';
import logo from '@assets/freetogame-logo.png'
import './Navbar.css';
import SearchIcon from '../Icons/SearchIcon';
import GiftIcon from '../Icons/GiftIcon';
import CloneIcon from '../Icons/CloneIcon';

const Navbar = () => {
  return (
    <Container>
      <div className='navbar'>
        <div className="navbar__route">
          <a href="#" className='navbar__logo'>
            <img src={ logo } alt="Free-To-Play Games logotype" />
          </a>
          <nav className='navbar__nav'>
            <ul className='navbar__menu'>
              <li className="navbar__item">
                <Dropdown className='navbar__dropdown'>Free Games</Dropdown>
              </li>
              <li className="navbar__item">
                <Dropdown className='navbar__dropdown'>Browser Games</Dropdown>
              </li>
              <li className="navbar__item">
                <Button className='navbar__button'>Special Offers</Button>
              </li>
              <li className="navbar__item">
                <Button className='navbar__button'>Top 2023</Button>
              </li>
              <li className="navbar__item navbar__item--more">
                <Dropdown className='navbar__dropdown navbar__icon navbar__icon--more' visualise={ false }>
                  <MoreIcon />
                </Dropdown>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar__account">
          <Button className='navbar__icon'>
            <SearchIcon />
          </Button>
          <Button className='navbar__icon'>
            <GiftIcon />
          </Button>
          <Button className='navbar__icon'>
            <CloneIcon />
          </Button>
          <Button className='navbar__login'>
            Log in
          </Button>
          <Button type='info' outline={ true } className='navbar__signup'>
            Join Free
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Navbar