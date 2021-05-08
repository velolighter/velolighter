import React from 'react';
import {BrowserStorage, Follower} from '../libs/storage';
import './styles.scss';

interface ContentProps {
  storage: BrowserStorage;
}

interface ContentState {
  isToggleOn: boolean;
  id: number;
  userName: string;
  followers: Follower[];
}

class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      isToggleOn: true,
      id: this.props.storage.getId(),
      userName: '',
      followers: this.props.storage.list(),
    };
  }

  handleClick(): void {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    const {id, userName, followers} = this.state;
    e.preventDefault();
    if (userName === '') {
      return;
    }
    for (const follower of followers) {
      if (follower.userName === userName) {
        this.setState({
          userName: '',
        });
        return;
      }
    }
    this.props.storage.add({
      id,
      userName,
    });
    this.props.storage.plusId();
    this.setState({
      id: this.props.storage.getId(),
      userName: '',
      followers: this.props.storage.list(),
    });
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      userName: e.target.value,
    });
  }

  handleRemove(name: string): void {
    this.props.storage.remove(name);
    this.setState((state) => ({
      followers: state.followers.filter((candidate) => {
        return candidate.userName !== name;
      }),
    }));
  }

  render(): React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    const {isToggleOn, userName, followers} = this.state;
    const active = {
      borderBottom: '2px solid rgb(18, 184, 134)',
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
            팔로워 추가
          </button>
          <button
            type="button"
            onClick={(): void => this.handleClick()}
            style={isToggleOn === false ? active : deactive}
          >
            팔로워 삭제
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
            <ul
              style={
                followers.length === 0
                  ? {overflowY: 'visible'}
                  : {overflowY: 'scroll'}
              }
            >
              {followers.length === 0 ? (
                <li className="delete-user__no-user">
                  <span>🥺</span>추가한 사용자가 없습니다.
                </li>
              ) : (
                followers.map((follower) => (
                  <li key={follower.id.toString()}>
                    {follower.userName}
                    <button
                      type="button"
                      onClick={(): void => this.handleRemove(follower.userName)}
                    >
                      삭제
                    </button>
                  </li>
                ))
              )}
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

const Popup: React.FC<{storage: BrowserStorage}> = (props) => {
  return (
    <div className="pop-up">
      <Content storage={props.storage} />
    </div>
  );
};

export default Popup;
