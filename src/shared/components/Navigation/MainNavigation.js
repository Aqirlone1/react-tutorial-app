import React, {useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import './MainNavigation.css'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import BackDrop from '../UIElements/BackDrop'

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () =>{  
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () =>{
    setDrawerIsOpen(false)
  }

  return (
 <>
   {drawerIsOpen &&  <BackDrop onCLick={closeDrawerHandler}/>}
  <SideDrawer show={drawerIsOpen} onCLick={closeDrawerHandler}> 
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>
    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className='main-navigation__title'>
            <Link to = "/"> Your places </Link>
         </h1>
            <nav className='main-navigation__header-nav'>
             <NavLinks />
            </nav>
    </MainHeader>
    </>
  )
}
export default MainNavigation