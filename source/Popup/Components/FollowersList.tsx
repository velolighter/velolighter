import React from 'react';
import styled from 'styled-components';
import {BrowserStorage} from '../../libs/storage';

const Wrapper = styled.div`
  width: 100%;
`;

const Ul = styled.ul`
  width: 100%;
  height: 180px;
  overflow-y: scroll;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
  margin-bottom: 18px;

  :last-child {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  color: ${({theme}): string => theme.colors.red};
  font-weight: ${({theme}): string => theme.font.medium};
`;

interface FollowersListProps {
  setFollowersNumber: React.Dispatch<React.SetStateAction<number>>;
  storage: BrowserStorage;
}

function FollowersList(props: FollowersListProps): JSX.Element {
  const {storage, setFollowersNumber} = props;
  function handleRemove(userName: string): void {
    storage.remove(userName);
    setFollowersNumber(props.storage.list().length);
  }

  return (
    <Wrapper>
      <Ul>
        {storage.list().map((follower) => (
          <List key={follower.userName}>
            <span>{follower.userName}</span>
            <Button onClick={(): void => handleRemove(follower.userName)}>
              삭제
            </Button>
          </List>
        ))}
      </Ul>
    </Wrapper>
  );
}

export default FollowersList;
