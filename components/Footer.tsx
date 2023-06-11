import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f9f4f9;
  color: #222;
  padding: 40px 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1180px) {
    padding: 40px 50px;
  }

  @media (max-width: 889px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }

  @media (max-width: 401px) {
    padding: 40px 20px;
  }
`;
const FooterLeft = styled.div`
  display: flex;
  flex: 1 0 45%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p {
    color: #777;
    width: 85%;
  }

  p:first-child {
    font-size: 1rem;
  }

  p:last-child {
    margin-top: 35px;
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex: 1 0 45%;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  li {
    color: #777;
    font-size: 0.9rem;
  }

  li:not(:last-child) {
    margin-bottom: 15px;
  }

  li:first-child {
    color: #222;
    font-weight: bold;
  }

  li:nth-child(2) {
    color: #4eb3e3;
  }
`;

const FooterContact = styled.div`
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .footer-contact {
    width: 100%;
    height: 50%;

    li:first-child {
      color: #222;
      font-weight: bold;
      margin-bottom: 15px;
    }

    li:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #777;

      @media (max-width: 425px) {
        margin-bottom: 20px;
      }

      .email-icon {
        color: #777;
      }
    }
  }

  .footer-socials {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-end;

    li:first-child {
      color: #222;
      font-weight: bold;
    }

    &_header {
      margin-bottom: 15px;
    }

    &_links {
      display: flex;
      align-items: flex-end;
      // justify-content: space-between;
      gap: 10px;

      li {
        border: 1px solid #777;
        padding: 4px;
        padding-bottom: 2px;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background-color: #4eb3e3;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLeft>
        <Image
          className="logo"
          src="/assets/logo.svg"
          alt="Logo of app"
          width={100}
          height={70}
        />
        <p>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you're getting the best deal!
        </p>

        <p>&copy; {new Date().getFullYear()} Ratepunk. All right Reserved</p>
      </FooterLeft>
      <FooterRight>
        <FooterLinks>
          <li>QUICK LINKS</li>

          <li>
            <Link href="">Price Comparison</Link>
          </li>

          <li>
            <Link href="">Chrome Extension</Link>
          </li>

          <li>
            <Link href="">How It Works</Link>
          </li>

          <li>
            <Link href="">Ratepunk Blog</Link>
          </li>

          <li>
            <Link href="">Privacy Policy</Link>
          </li>
        </FooterLinks>

        <FooterContact>
          <ul className="footer-contact">
            <li>Contact</li>

            <li>
              <Image
                className="email-icon"
                src="/assets/email-footer.svg"
                alt="Email icon"
                width={20}
                height={20}
              />
              <Link href="">hi@ratepunk.com</Link>
            </li>
          </ul>
          <ul className="footer-socials">
            <li className="footer-socials_header">SOCIAL</li>

            <ul className="footer-socials_links">
              <li>
                <Link href="">
                  <Image
                    src="/assets/instagram.svg"
                    alt="Instagram icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src="/assets/facebook.svg"
                    alt="Facebook icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src="/assets/linkedin.svg"
                    alt="LinkedIn icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src="/assets/twitter.svg"
                    alt="Instagram icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src="/assets/tiktok.svg"
                    alt="Tiktok icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </FooterContact>
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
