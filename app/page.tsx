'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroContent from '@/components/HeroContent';
import WebStore from '@/components/WebStore';
import styled from 'styled-components';
import styles from './page.module.css';

const HomeWrapper = styled.div`
  height: auto;
  width: 100vw;
  background-color: #f8cc5c;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Header />

      <HeroContent />

      <WebStore />

      <Footer />
    </HomeWrapper>
  );
}
