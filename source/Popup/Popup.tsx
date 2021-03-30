import React from 'react';
import {BrowserStorage} from '../libs/storage';
import './styles.scss';

interface TabState {
  isToggleOn: boolean;
  id: number;
  userName: string;
}

class Tab extends React.Component<unknown, TabState> {
  storage: BrowserStorage;

  constructor(props: TabState) {
    super(props);
    this.state = {
      isToggleOn: true,
      id: 0,
      userName: '',
    };
  }

  handleClick(): void {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleSubmit(e: React.ChangeEvent<HTMLInputElement>): void {
    const {id, userName} = this.state;
    e.preventDefault();
    if (userName === '') {
      return;
    }
    this.storage.add({
      id,
      userName,
    });
    this.setState((state) => ({
      id: state.id + 1,
      userName: '',
    }));
    console.log(this.storage.list());
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      userName: e.target.value,
    });
  }

  async componentDidMount(): Promise<void> {
    this.storage = await BrowserStorage.getStorage();
  }

  render(): React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    const {isToggleOn, userName} = this.state;
    const {followers} = this.storage;
    const active = {
      borderBottom: '2px solid rgb(12, 166, 120)',
      color: 'rgb(12, 166, 120)',
      fontWeight: '700',
    };
    const deactive = {
      borderBottom: 'none',
    };
    const appear = {
      display: 'block',
    };
    const disappear = {
      display: 'none',
    };

    return (
      <div className="wrapper">
        <div className="tab">
          <button
            type="button"
            onClick={(): void => this.handleClick()}
            style={isToggleOn === true ? active : deactive}
          >
            팔로잉 추가
          </button>
          <button
            type="button"
            onClick={(): void => this.handleClick()}
            style={isToggleOn === false ? active : deactive}
          >
            팔로잉 삭제
          </button>
        </div>
        <div className="content">
          <form
            className="add-user"
            style={isToggleOn === true ? appear : disappear}
            onSubmit={(e): void => this.handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="팔로잉할 사용자를 추가해주세요"
              className="add-user__input"
              value={userName}
              onChange={(e): void => this.handleChange(e)}
            />
            <button className="add-user__button" type="submit">
              사용자 추가
            </button>
          </form>
          <div
            className="delete-user"
            style={isToggleOn === false ? appear : disappear}
          >
            <ul>
              {followers?.map((follower) => (
                <li key={follower.id}>
                  {follower.userName}
                  <button type="button">삭제</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="count-users">
          팔로우한 사용자 수:<span>{followers?.length}</span>
        </div>
      </div>
    );
  }
}

const Popup: React.FC = () => {
  return (
    <div className="pop-up">
      <Tab />
    </div>
  );
};

export default Popup;
