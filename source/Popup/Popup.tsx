import React, {useState} from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';
import {BrowserStorage} from '../libs/storage';
import Tab from './Components/Tab';
import ContentWrapper from './Components/ContentWrapper';
import Status from './Components/Status';
import TabButton from './Components/TabButton';

const theme: DefaultTheme = {
  colors: {
    blue: '#1e90ff',
    gray: '#7f7f7f',
    whiteGray: '#dbdbdb',
    white: '#fff',
    pointColor: 'rgb(18, 184, 134)',
    red: '#e55039',
  },
  font: {
    medium: '500',
    bold: '700',
    pointColor: 'rgb(12, 166, 120)',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    color: #222;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    margin: 0;
  }

  button {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style: none;
  }
`;

const MainWrapper = styled.div`
  width: 400px;
`;

const tabItems = [
  {
    id: 0,
    title: '팔로워 추가',
  },
  {
    id: 1,
    title: '팔로워 삭제',
  },
];

interface MainProps {
  storage: BrowserStorage;
}

function Main(props: MainProps): JSX.Element {
  const {storage} = props;
  const initialFollowersNumber = storage.list().length;
  const [active, setActive] = useState(0);
  const [followersNumber, setFollowersNumber] = useState(
    initialFollowersNumber
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainWrapper>
        <Tab>
          {tabItems.map((tabItem) => (
            <TabButton
              key={tabItem.id}
              title={tabItem.title}
              isActive={active === tabItem.id}
              onClick={(): void => setActive(tabItem.id)}
            />
          ))}
        </Tab>
        <ContentWrapper
          active={active}
          storage={props.storage}
          followersNumber={followersNumber}
          setFollowersNumber={setFollowersNumber}
        />
        <Status followersNumber={followersNumber} />
      </MainWrapper>
    </ThemeProvider>
  );
}

const Popup: React.FC<{storage: BrowserStorage}> = (props) => {
  const {storage} = props;
  return (
    <div className="pop-up">
      <Main storage={storage} />
    </div>
  );
};

export default Popup;
