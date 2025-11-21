import type { FC } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import SVG_ViteLogo from '@public/vite.svg?react';
import SVG_ReactLogo from '@assets/react.svg?react';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logos}>
          <SVG_ViteLogo className={styles.logo} />
          <SVG_ReactLogo className={clsx(styles.logo, styles.reactLogo)} />
        </div>
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" className={styles.navLink} end>
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/about" className={styles.navLink}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
