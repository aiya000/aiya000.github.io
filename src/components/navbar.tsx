import { Menu, Transition } from '@headlessui/react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

import * as style from './navbar.css'

import { mediaMinWidth } from '@/css/variables.css'

const Navbar: React.FC = () => {
  const isLarger = useMediaQuery(mediaMinWidth.pc)

  return (
    <div className={style.navbar}>
      <Link className={style.logo} to="/">
        <StaticImage alt="logo" src="perolala.png" width={100} />
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
