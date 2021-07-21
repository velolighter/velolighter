import React from 'react';
import styled from 'styled-components';
import List from './List';
import {BrowserStorage} from '../../libs/storage';
import Form from './Form';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
`;

interface ContentWrapperProps {
  active: number;
  storage: BrowserStorage;
  followersNumber: number;
  setFollowersNumber: React.Dispatch<React.SetStateAction<number>>;
}

const tabMenuList = ['additional-section', 'delete-section'];

function ContentWrapper(props: ContentWrapperProps): JSX.Element {
  const {storage, active, followersNumber, setFollowersNumber} = props;
  return (
    <Wrapper>
      {tabMenuList[active] === 'additional-section' && (
        <Form storage={storage} setFollowersNumber={setFollowersNumber} />
      )}
      {tabMenuList[active] === 'delete-section' && (
        <List
          followersNumber={followersNumber}
          setFollowersNumber={setFollowersNumber}
          storage={storage}
        />
      )}
    </Wrapper>
  );
}

export default ContentWrapper;
