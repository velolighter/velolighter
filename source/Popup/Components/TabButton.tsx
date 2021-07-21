import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button<{isActive: boolean}>`
  width: 50%;
  height: 54px;
  cursor: pointer;

  /* eslint-disable */
  ${({isActive, theme}) =>
    isActive &&
    css`
      border-bottom: 2px solid ${theme.colors.pointColor};
      font-weight: ${theme.font.bold};
      color: ${theme.font.pointColor};
    `}/* eslint-enable */
`;

interface TabButtonProps {
  key: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton(props: TabButtonProps): JSX.Element {
  const {isActive, onClick, title} = props;
  return (
    <Button isActive={isActive} onClick={onClick}>
      {title}
    </Button>
  );
}

export default TabButton;
