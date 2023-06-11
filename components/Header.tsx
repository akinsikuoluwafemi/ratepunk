import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const HeaderWrapper = styled.nav`
  background-color: #fff;
  padding: 0 200px;
  color: teal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #777;

  @media (max-width: 1180px) {
    padding: 0 50px;
  }

  .right-side {
    flex: 0 0 50%;
    // background-color: purple;
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

const MobileHeaderWrapper = styled.header<{ toggleMenu: boolean }>`
  background-color: #fff;

  height: ${(props) => (props.toggleMenu ? '200px' : '70px')};
  border-bottom: 1px solid #777;
  padding: 0 50px;
  transition: all 0.1s ease;

  @media (max-width: 401px) {
    padding: 0 20px;
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
    height: ${(props) => (props.toggleMenu ? '110px' : '0px')};
    overflow: hidden;
    opacity: ${(props) => (props.toggleMenu ? '1' : '0')};
    display: ${(props) => (props.toggleMenu ? 'flex' : 'none')};
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

  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 889px)',
  });

  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 890px)' });

  return (
    <>
      {isTabletOrMobile && (
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
              <li>
                <Link href="">Chrome Extension</Link>
              </li>
              <li>
                <Link href="">Price Comparison</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
            </ul>
          </div>
        </HeaderWrapper>
      )}

      {isDesktopOrLaptop && (
        <MobileHeaderWrapper toggleMenu={toggleMenu}>
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
              <li>
                <Link href="">Chrome Extension</Link>
              </li>
              <li>
                <Link href="">Price Comparison</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
            </ul>
          </div>
        </MobileHeaderWrapper>
      )}
    </>
  );
};

export default Header;
