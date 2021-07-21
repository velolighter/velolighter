import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({theme}): string => theme.colors.whiteGray};
`;

interface TabProps {
  children: JSX.Element[];
}

function Tab(props: TabProps): JSX.Element {
  const {children} = props;
  return <Wrapper>{children}</Wrapper>;
}

export default Tab;
