import React, {useState} from 'react';
import './styles.scss';

const addUser = (e): void => {
  e.preventDefault();
};

const Tab: React.FC = () => {
  const [state, setState] = useState(0);
  return (
    <div className="wrapper">
      <div className="tab">
        <button
          type="button"
          onClick={(): void => setState(0)}
          style={
            state === 0
              ? {
                  borderBottom: '2px solid rgb(12, 166, 120)',
                  color: 'rgb(12, 166, 120)',
                  fontWeight: '700',
                }
              : {borderBottom: 'none'}
          }
        >
          팔로잉 추가
        </button>
        <button
          type="button"
          onClick={(): void => setState(1)}
          style={
            state === 1
              ? {
                  borderBottom: '2px solid rgb(12, 166, 120)',
                  color: 'rgb(12, 166, 120)',
                  fontWeight: '700',
                }
              : {borderBottom: 'none'}
          }
        >
          팔로잉 삭제
        </button>
      </div>
      <div className="content">
        <form
          className="add-user"
          style={state === 0 ? {display: 'block'} : {display: 'none'}}
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
          style={state === 1 ? {display: 'block'} : {display: 'none'}}
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
