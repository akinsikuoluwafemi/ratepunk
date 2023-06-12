import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 0 200px;
  color: teal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #777;
  display: none;

  @media (max-width: 1180px) {
    padding: 0 50px;
  }

  @media (min-width: 890px) {
    display: flex;
  }

  .right-side {
    flex: 0 0 50%;
  }
  .left-side {
    flex: 0 0 50%;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #777;

      li:first-child {
        color: #4eb3e3;
      }
    }
  }
`;

const MobileHeaderWrapper = styled.header<{ togglemenu: boolean }>`
  background-color: #fff;
  height: ${(props) => (props.togglemenu ? '200px' : '75px')};
  border-bottom: 1px solid #777;
  padding: 0 50px;
  transition: all 0.1s ease;
  display: none;

  @media (max-width: 889px) {
    display: block;
  }

  @media (max-width: 401px) {
    padding: 0px 20px;
  }

  .menu-icon {
    margin-top: 20px;
    cursor: pointer;
  }

  .nav-mobile {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .nav-item-wrapper {
    background-color: transparent;
    height: ${(props) => (props.togglemenu ? '110px' : '0px')};
    overflow: hidden;
    opacity: ${(props) => (props.togglemenu ? '1' : '0')};
    display: ${(props) => (props.togglemenu ? 'flex' : 'none')};
    transition: all 0.3s ease-in-out;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      color: #777;
      gap: 10px;

      li:first-child {
        color: #4eb3e3;
      }
    }
  }
`;

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const navLinks = ['Chrome Extension', 'Price Comparison', 'Blog'];

  return (
    <>
      <HeaderWrapper>
        <div className="right-side">
          <ul>
            <li>
              <Link href="/">
                <Image
                  src="/assets/logo.svg"
                  alt="Logo of app"
                  width={100}
                  height={70}
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className="left-side">
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <Link href="">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </HeaderWrapper>

      <MobileHeaderWrapper togglemenu={toggleMenu}>
        <nav className="nav-mobile">
          <ul>
            <li>
              <Link href="/">
                <Image
                  src="/assets/logo.svg"
                  alt="Logo of app"
                  width={100}
                  height={70}
                />
              </Link>
            </li>
          </ul>
          <span
            className="menu-icon"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <Image
              src="/assets/menu.svg"
              alt="Menu icon"
              width={30}
              height={30}
            />
          </span>
        </nav>
        <div className="nav-item-wrapper">
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <Link href="">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </MobileHeaderWrapper>
    </>
  );
};

export default Header;
