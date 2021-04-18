import {BrowserStorage} from '../libs/storage';

const userInfos = document.getElementsByClassName('userinfo');

setInterval(function callBack() {
  BrowserStorage.getStorage().then((storage) => {
    storage.sync();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    function highLightBorder(infosHighlight: any): void {
      for (let index = 0; index < infosHighlight.length; index += 1) {
        const userName = infosHighlight[index].children[1].textContent
          .replace('by', '')
          .trim();
        const styledDiv = infosHighlight[index].parentElement.parentElement;
        const span = infosHighlight[index].children[1];
        const followers = storage.list();

        for (const follower of followers) {
          if (follower.userName === userName && span.className === '') {
            span.className = 'following';
            styledDiv.style.cssText = 'border: 3px solid rgb(18, 184, 134);';
          }
        }
      }
    }

    function getUserNames(): string[] {
      const followers = storage.list();
      const userNamesArray = [];

      for (const follower of followers) {
        userNamesArray.push(follower.userName);
      }

      return userNamesArray;
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    function deleteBorder(infosDelete: any): void {
      const userNamesArray = getUserNames();

      for (let index = 0; index < infosDelete.length; index += 1) {
        const userName = infosDelete[index].children[1].textContent
          .replace('by', '')
          .trim();
        const styledDiv = infosDelete[index].parentElement.parentElement;
        const span = infosDelete[index].children[1];

        if (
          !userNamesArray.includes(userName) &&
          span.className === 'following'
        ) {
          span.className = '';
          styledDiv.style.cssText = 'border: none;';
        }
      }
    }

    highLightBorder(userInfos);
    deleteBorder(userInfos);
  });
}, 100);

export {};
