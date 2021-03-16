# 기여하기 

## 개발 환경

### Step 0: NVM 설치

빠르게 설치하는 방법. 더 자세한 내용은 [nvm.sh](https://nvm.sh)를 참고한다.

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

```shell
$ nvm use
```

### Step 1: 패키지 설치

`yarn`을 이용해서 패키지를 설치 한다.

```shell
$ yarn install 
```

### Step 2: Extension 설치

`yarn run dev:chrome` 명령어를 이용해서 빌드를 한다. 그러면 `./extension/`이라는 디렉토리가 생성되는 것을 확인 할 수 있다.

이후 크롬에서 `chrome://extensions`로 접속한다. 우측 상단 `Developer mode`를 활성화 한다. 그리고 `Load unpacked`를 클릭해서 이전 단계에서 빌드한 `extension`을 로드한다. 그러면 앱이 로드된 것을 확인할 수 있다.  

앱 활성화 시 우측 상단에 아이콘을 확인할 수 있다.

