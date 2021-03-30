const userInfos = document.getElementsByClassName('userinfo');
const userNames = [
  'mowinckel',
  'openhub',
  'juunini',
  'white-jang',
  'dion',
  'yoons0717',
  'haejoo',
  'gil0127',
];

function addTag(infos: any): void {
  for (let index = 0; index < infos.length; index += 1) {
    const userName = infos[index].children[1].textContent
      .replace('by', '')
      .trim();
    const span = infos[index].children[1];
    if (userNames.includes(userName) && span.className === '') {
      span.className = 'following';
      span.style.cssText =
        'background-position-y: -0%; background-image: linear-gradient( white 50%, gold 50%); background-size: auto 175%;';
    }
  }
}

setInterval(function callBack() {
  addTag(userInfos);
}, 2000);

export {};
