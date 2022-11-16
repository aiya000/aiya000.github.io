import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import * as style from './navbar.css'

const Navbar: React.FC = () => (
  <div className={style.navbar}>
    <Link to="/">
      <StaticImage alt="logo" src="perolala.png" width={100} />
    </Link>
    <span className={style.logoName}>galaxy-sixth-sensey</span>
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

export default Navbar
