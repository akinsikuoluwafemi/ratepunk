import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

const WebstoreWrapper = styled.div`
  background: #45565e;
  padding: 30px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 1180px) {
    padding: 30px 50px;
  }

  @media (max-width: 889px) {
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 401px) {
    align-items: flex-start;
    padding: 20px;
  }

  .item {
    border-radius: 10px;
    border: 1px solid #222;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    padding-left: 15px;
    padding-top: 7px;
    padding-bottom: 10px;
    padding-right: 15px;
    transition: all 0.3s ease-in-out;
    color: #fff;

    @media (max-width: 889px) {
      padding: 0;
      border: none;
    }

    &-text-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      span:last-child {
        font-size: 1rem;
        font-weight: 700;
      }
    }
    &-star-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
  }

  .item:first-child {
    flex: 1 0 33%;
    border-radius: 10px;
  }

  .item:nth-child(2) {
    flex: 1 0 33%;

    border-radius: 10px;
  }

  .item:nth-child(3) {
    flex: 1 0 33%;

    border: none;
    align-items: center;
  }
`;

const WebStore = () => {
  return (
    <WebstoreWrapper>
      <Link
        target={'_blank'}
        href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
      >
        <div className="item">
          <Image src="/assets/chrome.svg" alt="chrome" width={50} height={50} />

          <div className="item-text-wrapper">
            <span>available in the</span>
            <span>chrome web store</span>
          </div>
        </div>
      </Link>

      <Link
        target={'_blank'}
        href="https://apps.apple.com/app/ratepunk/id1607823726"
      >
        <div className="item">
          <Image src="/assets/apple.svg" alt="chrome" width={50} height={50} />

          <div className="item-text-wrapper">
            <span>available in the</span>
            <span>apple app store</span>
          </div>
        </div>
      </Link>

      <div className="item">
        <span className="item-star-icon">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
        <span>Chrome Store reviews</span>
      </div>
    </WebstoreWrapper>
  );
};

export default WebStore;
