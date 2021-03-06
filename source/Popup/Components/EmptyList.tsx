import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const IconSpan = styled.span`
  font-size: 40px;
  margin-bottom: 5px;
`;

function EmptyList(): JSX.Element {
  return (
    <Wrapper>
      <IconSpan>π₯Ί</IconSpan>
      <span>μΆκ°ν μ¬μ©μκ° μμ΅λλ€.</span>
    </Wrapper>
  );
}

export default EmptyList;
