import { caveatBrush } from '@/app/fonts';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import ReferalForm from './ReferalForm';

const HeroContainer = styled.section`
  padding: 40px 200px;
  height: 700px;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 1180px) {
    padding: 40px 50px;
  }

  @media (max-width: 889px) {
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 401px) {
    padding: 40px 20px;
  }
`;

const ReferralCardWrapper = styled.div`
  background-color: #f4f9f4;
  flex: 1 0 45%;
  color; #222;
  padding: 50px 50px;
  border-radius: 15px;
  border: 1px solid #777;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 465px) {
    padding: 30px 20px;
  }

  .card-footer-text {
    font-size: 14px;
    color: #777;
    margin-top: 100px;
  }
`;

const ReferalHeading = styled.h3`
  font-size: 2.6rem;
  color: #000;
  line-height: 1.4;
  color: #333;

  @media (max-width: 414px) {
    font-size: 2rem;
  }
`;

const ReferalText = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 20px 0;
  line-height: 1.5;
`;

const StepsWrapper = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StepsList = styled.div`
  margin: 0 auto;
  height: auto;
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;

  @media (max-width: 465px) {
    width: 100%;
  }
`;

const StepsItem = styled.div`
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  display: flex;
  color: #222;

  @media (max-width: 414px) {
    gap: 10px;
  }

  .steps-image {
    width: 45%;
  }
`;

const StepItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  // width: 50%;

  p:first-child {
    font-weight: 700;
    font-size: 1rem;
    color: #4eb3e3;
  }
  p:nth-child(2) {
    font-size: 1.2rem;
    color: #222;
  }
  p:nth-child(3) {
    font-size: 1rem;
    color: #444;
  }
`;

const stepsData = [
  {
    id: 1,
    image: '/assets/invite.svg',
    title: 'INVITE FRIENDS',
    text: 'Refer friends with your unique referral link.',
    alternate: false,
  },
  {
    id: 2,
    image: '/assets/collect-coins.svg',
    title: 'COLLECT COINS',
    text: 'Get 1 coin for each friend that installs our extension using your referral link.',
    alternate: true,
  },
  {
    id: 3,
    image: '/assets/voucher.svg',
    title: 'GET VOUCHER',
    text: 'Redeem for a $20 hotel booking voucher once you collect 20 coins.',
    alternate: false,
  },
];

const HeroContent = () => {
  return (
    <HeroContainer>
      <ReferralCardWrapper>
        <ReferalHeading className={caveatBrush.className}>
          REFER FRIENDS AND GET REWARDS
        </ReferalHeading>

        <ReferalText>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </ReferalText>

        <ReferalForm />

        <p className="card-footer-text">Limit on max rewards apply.</p>
      </ReferralCardWrapper>

      <StepsWrapper>
        {stepsData.map((item) => (
          <StepsList key={item.id}>
            <StepsItem>
              {item.alternate ? (
                <>
                  <StepItemContent>
                    <p>STEP {item.id}</p>
                    <p className={caveatBrush.className}>{item.title}</p>
                    <p>{item.text}</p>
                  </StepItemContent>
                  <Image
                    className="steps-image"
                    src={item.image}
                    alt={item.title}
                    width={110}
                    height={110}
                  />
                </>
              ) : (
                <>
                  <Image
                    className="steps-image"
                    src={item.image}
                    alt={item.title}
                    width={110}
                    height={110}
                  />
                  <StepItemContent>
                    <p>STEP {item.id}</p>
                    <p className={caveatBrush.className}>{item.title}</p>
                    <p>{item.text}</p>
                  </StepItemContent>
                </>
              )}
            </StepsItem>
          </StepsList>
        ))}

        {/*  */}
      </StepsWrapper>
    </HeroContainer>
  );
};

export default HeroContent;
