import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 0 25px 20px;
`;

const Span = styled.span`
  margin-left: 3px;
`;

interface StatusProps {
  followersNumber: number;
}

function Status(props: StatusProps): JSX.Element {
  const {followersNumber} = props;
  return (
    <Wrapper>
      팔로우한 사용자 수:<Span>{followersNumber}</Span>
    </Wrapper>
  );
}

export default Status;
