const userInfos = document.getElementsByClassName('userinfo');
const userNames = [
  'mowinckel',
  'openhub',
  'juunini',
  'white-jang',
  'dion',
  'yoons0717',
];

function addTag(userInfos) {
  for (let index = 0; index < userInfos.length; index++) {
    const userName = userInfos[index].children[1].textContent
      .replace('by', '')
      .trim();
    const span = userInfos[index].children[1];
    if (userNames.includes(userName) && span.className === '') {
      span.className = 'following';
      span.style.cssText =
        'background-position-y: -0%; background-image: linear-gradient( white 50%, gold 50%); background-size: auto 175%;';
    }
  }
}

const repeatFn = setInterval(function () {
  addTag(userInfos);
}, 2000);

export {};
