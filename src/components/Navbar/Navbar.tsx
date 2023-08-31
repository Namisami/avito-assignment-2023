import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@components/Button/Button';
import Dropdown from '@components/Dropdown/Dropdown';
import MoreIcon from '@components/Icons/MoreIcon';
import Container from '@components/Container/Container';
import SearchIcon from '@components/Icons/SearchIcon';
import GiftIcon from '@components/Icons/GiftIcon';
import CloneIcon from '@components/Icons/CloneIcon';
import logo from '@assets/freetogame-logo.png'
import './Navbar.css';

const Navbar = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)

  const iconMenu = () => {
    return (
      <div className='navbar-menu'>
        <Button className='navbar__icon'>
          <SearchIcon />
        </Button>
        <Button className='navbar__icon'>
          <GiftIcon />
        </Button>
        <Button className='navbar__icon'>
          <CloneIcon />
        </Button>
        <div onClick={ () => setBurgerIsOpen(!burgerIsOpen) } className={`menu-icon ${burgerIsOpen ? 'menu-icon--open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }

  const menuList = () => {
    return (
      <div className='navbar-list'>
        <div className="navbar-list__account">
          <Button className='navbar__login'>
            Log in
          </Button>
          <Button type='info' outline={ true } className='navbar__signup'>
            Join Free
          </Button>
        </div>
        <nav className='navbar-list__nav'>
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
    )
  }

  return (
    <>
      <div className='navbar'>
        <Container>
          <div className="navbar__route">
            <Link to={ '/' } className='navbar__logo'>
              <img src={ logo } alt="Free-To-Play Games logotype" />
            </Link>
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
          { iconMenu() }
        </Container>
      </div>
      { burgerIsOpen && menuList() }
    </>
  )
}

export default Navbar