import * as React from 'react';
import ReactDOM from 'react-dom';

import { BrowserStorage } from '../libs/storage';
import Popup from './Popup';

BrowserStorage.getStorage().then((storage) => {
    ReactDOM.render(<Popup storage={storage}/>, document.getElementById('popup-root'));
})
