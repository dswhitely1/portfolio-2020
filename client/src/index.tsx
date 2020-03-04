import React from 'react';
import {render} from 'react-dom';

import App from "./components/App";
import './styles/main.scss';

const page = document.getElementById('root');

render(<App />, page);
