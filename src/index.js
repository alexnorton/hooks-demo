import React from 'react';
import ReactDOM from 'react-dom';

import Class from './components/Class';
import Hooks from './components/Hooks';
import HooksWithReducer from './components/HooksWithReducer';
import CustomHook from './components/CustomHook';

ReactDOM.render(
  <div>
    <Class />
    <Hooks />
    <HooksWithReducer />
    <CustomHook />
  </div>,
  document.getElementById('root')
);
