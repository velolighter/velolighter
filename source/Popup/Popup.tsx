import React from 'react';
import { BrowserStorage } from '../libs/storage'
import './styles.scss';

const addUser = (e: any): void => {
  e.preventDefault();
};

type TabProps = {}

type TabState = {
  index: number;
}

class Tab extends React.Component<TabProps, TabState> {
  storage: BrowserStorage;

  constructor(props: any) {
    super(props)
    this.state = { index: 0 };
  }

  async componentDidMount() {
    this.storage = await BrowserStorage.getStorage();
  }

  render() {
    const { index } = this.state
    const active = {
      borderBottom: '2px solid rgb(12, 166, 120)',
      color: 'rgb(12, 166, 120)',
      fontWeight: '700',
    }
    const deactive = {
      borderBottom: 'none'
    }

    return (
      <div className="wrapper">
        <div className="tab">
          <button
            type="button"
            onClick={() => this.state = { index: 0 }}
            style={index === 0 ? active : deactive}
          >
            팔로잉 추가
          </button>
          <button
            type="button"
            onClick={() => this.state = { index: 1 }}
            style={index === 1 ? active : deactive}
          >
            팔로잉 삭제
          </button>
        </div>
        <div className="content">
          <form
            className="add-user"
            style={index === 0 ? { display: 'block' } : { display: 'none' }}
          >
            <input
              type="text"
              placeholder="팔로잉할 사용자를 추가해주세요"
              className="add-user__input"
            />
            <button className="add-user__button" type="submit" onClick={addUser}>
              사용자 추가
            </button>
          </form>
          <div
            className="delete-user"
            style={index === 1 ? { display: 'block' } : { display: 'none' }}
          >
            <ul>
              <li>
                mowinckel
                <button type="button">삭제</button>
              </li>
              <li>
                openhub
                <button type="button">삭제</button>
              </li>
              <li>
                juunini
                <button type="button">삭제</button>
              </li>
              <li>
                white-jang
                <button type="button">삭제</button>
              </li>
              <li>
                white-jang
                <button type="button">삭제</button>
              </li>
              <li>
                white-jang
                <button type="button">삭제</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

  }
};

const CountUsers: React.FC = () => {
  return (
    <div className="count-users">
      팔로우한 사용자 수:<span>1</span>
    </div>
  );
};

const Popup: React.FC = () => {
  return (
    <div className="pop-up">
      <Tab />
      <CountUsers />
    </div>
  );
};

export default Popup;
