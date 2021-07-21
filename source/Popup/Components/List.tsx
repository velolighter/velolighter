import React from 'react';
import styled from 'styled-components';
import {BrowserStorage} from '../../libs/storage';
import EmptyList from './EmptyList';
import FollowersList from './FollowersList';

const Wrapper = styled.div`
  width: 360px;
  height: 100%;
  display: flex;
  align-items: center;
`;

interface ListProps {
  followersNumber: number;
  setFollowersNumber: React.Dispatch<React.SetStateAction<number>>;
  storage: BrowserStorage;
}

function List(props: ListProps): JSX.Element {
  const {storage, setFollowersNumber} = props;
  return (
    <Wrapper>
      {storage.list().length === 0 ? (
        <EmptyList />
      ) : (
        <FollowersList
          setFollowersNumber={setFollowersNumber}
          storage={storage}
        />
      )}
    </Wrapper>
  );
}

export default List;
