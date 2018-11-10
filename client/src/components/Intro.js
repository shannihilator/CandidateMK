import React from 'react'
import styled from 'styled-components'
import CodingChallengeOne from './CodingChallengeOne';
import CodingChallengeTwo from './CodingChallengeTwo';

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 30px;
`

const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  width: 827px;
  height: 485px;
  border-top: 6px solid #4a90e2;
  grid-template: 30% 1fr / 1fr;
`

const InstructionsBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;

  p {
    font-size: 20px;
  }
`

const Logo = () => (
  <FlexBox>
    <img src="/logo.svg" />
    <h1>SalesLoft Developer Interview Kit</h1>
  </FlexBox>
)

const Instructions = () => (
  <InstructionsBox>
    <h3 style={{textAlign: 'center'}}>
      Level One
    </h3>
    <CodingChallengeOne/>
    <h3 style={{textAlign: 'center'}}>
      Level Two
    </h3>
    <CodingChallengeTwo/>
    <h3 style={{textAlign: 'center'}}>
      Level Three
    </h3>
  </InstructionsBox>
)


export const Intro = () => (
  <Box>
    <Logo />
    <Instructions />
  </Box>
);
