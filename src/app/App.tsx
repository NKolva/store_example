import React from 'react';
import { Header } from '../features/Header/Header';

import './app.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
    </div>
  );
}

export default App;
