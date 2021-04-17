import {BrowserStorage} from '../libs/storage';

const userInfo = document.getElementsByClassName('userinfo');

setInterval(function callBack() {
  BrowserStorage.getStorage().then((storage) => {
    const followers = storage.list();
    console.log(followers);
    /* eslint-disable @typescript-eslint/no-explicit-any */
    function addTag(infos: any): void {
      for (let index = 0; index < infos.length; index += 1) {
        const userName = infos[index].children[1].textContent
          .replace('by', '')
          .trim();

        const span = infos[index].children[1];
        for (const follower of followers) {
          if (follower.userName === userName && span.className === '') {
            span.className = 'following';
            span.style.cssText =
              'background: linear-gradient(transparent 80%, rgb(64, 240, 175, 0.8) 80%);';
          }
        }
      }
    }

    addTag(userInfo);
  });
}, 2000);

export {};
