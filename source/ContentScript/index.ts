import {BrowserStorage} from '../libs/storage';

const userInfos = document.getElementsByClassName('userinfo');

setInterval(function callBack() {
  BrowserStorage.getStorage().then((storage) => {
    storage.sync();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    function highLightBorder(userNamesToHighlight: any): void {
      for (let index = 0; index < userNamesToHighlight.length; index += 1) {
        const userName = userNamesToHighlight[index].children[1].textContent
          .replace('by', '')
          .trim();
        const styledDiv =
          userNamesToHighlight[index].parentElement.parentElement;
        const span = userNamesToHighlight[index].children[1];
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
    function deleteBorder(userNamesToDelete: any): void {
      const userNamesArray = getUserNames();

      for (let index = 0; index < userNamesToDelete.length; index += 1) {
        const userName = userNamesToDelete[index].children[1].textContent
          .replace('by', '')
          .trim();
        const styledDiv = userNamesToDelete[index].parentElement.parentElement;
        const span = userNamesToDelete[index].children[1];
        
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
}, 1000);

export {};
