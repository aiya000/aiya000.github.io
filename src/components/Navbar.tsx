import { Menu, Transition } from '@headlessui/react'
import { Link } from 'gatsby'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

import * as style from './Navbar.css'

import perolalaImage from '@/assets/images/perolala.png'
import { mediaMinWidth } from '@/css/variables.css'

const Navbar: React.FC = () => {
  const isLarger = useMediaQuery(mediaMinWidth.pc)

  return (
    <div className={style.navbar}>
      <Link className={style.logo} to="/">
        {/* TODO: GatsbyImageかStaticImage使う */}
        <img alt="logo" src={perolalaImage} width={100} />
        <span className={style.logoName}>galaxy-sixth-sensey</span>
      </Link>
      {isLarger ? <DirectLinks /> : <LinksMenu />}
    </div>
  )
}

export default Navbar

const DirectLinks: React.FC = () => (
  <div>
    <Link className={style.link} to="/">
      Home
    </Link>
    <Link className={style.link} to="/about">
      About
    </Link>
    <Link className={style.link} to="/profile">
      Profile
    </Link>
    <Link className={style.link} to="/works">
      Works
    </Link>
  </div>
)

export const LinksMenu: React.FC = () => (
  <Menu as="div">
    <Menu.Button as="div" className={style.menuButton}>
      三
    </Menu.Button>
    {/* TODO: Transitionでポップアップ感つくる */}
    <Transition>
      <Menu.Items className={style.menuItems}>
        <Menu.Item>
          <Link className={style.menuItem} to="/">
            <span className={style.point}>▶</span>
            <span className={style.linkText}>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className={style.menuItem} to="/about">
            <span className={style.point}>▶</span>
            <span className={style.linkText}>About</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className={style.menuItem} to="/profile">
            <span className={style.point}>▶</span>
            <span className={style.linkText}>Profile</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className={style.menuItem} to="/works">
            <span className={style.point}>▶</span>
            <span className={style.linkText}>Works</span>
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
)
