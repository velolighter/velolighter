import React, {useState} from 'react';
import styled from 'styled-components';
import {BrowserStorage} from '../../libs/storage';

const FormWrapper = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Input = styled.input`
  border: 1px solid #dbdbdb;
  height: 50px;
  padding: 0 20px;
  border-radius: 6px;
  margin-bottom: 25px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({theme}): string => theme.colors.gray};
  }

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  background: ${({theme}): string => theme.colors.blue};
  color: ${({theme}): string => theme.colors.white};
  height: 40px;
  font-weight: ${({theme}): string => theme.font.medium};
`;

interface FormProps {
  storage: BrowserStorage;
  setFollowersNumber: React.Dispatch<React.SetStateAction<number>>;
}

function Form(props: FormProps): JSX.Element {
  const [inputState, setInput] = useState('');
  const {storage, setFollowersNumber} = props;

  function checkUserName(userName: string): boolean {
    for (const follower of storage.list()) {
      if (follower.userName === userName) {
        setInput('');
        return true;
      }
    }
    return false;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (inputState === '') return;
    if (checkUserName(inputState)) return;
    const newFollower = {
      userName: inputState,
    };
    storage.add(newFollower);
    setFollowersNumber(storage.list().length);
    setInput('');
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInput(e.target.value);
  }

  return (
    <FormWrapper onSubmit={(e): void => handleSubmit(e)}>
      <Input
        placeholder="팔로잉할 사용자를 추가해주세요"
        onChange={(e): void => onChange(e)}
        value={inputState}
      />
      <Button>사용자 추가</Button>
    </FormWrapper>
  );
}

export default Form;
