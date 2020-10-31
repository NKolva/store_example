import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { isDesktop } from '../utils/device';
import { getNavigationItem } from '../features/store';

import { Header } from '../features/Header/Header';
import { MainPage, Smartphones, Laptops, Discount } from '../features/Page';
import { NavigationItem } from '../components/NavigationItem/NavigationItem';

import './app.scss';

const App = (): JSX.Element => {
  const navigationItem = useSelector(getNavigationItem);

  const desktop = useMemo(() => isDesktop, []);

  return (
    <div className="app">
      <Header/>
      <div className="app__content">
        {desktop && (
          <div className="app__categories">
            <div className="app__categories-content">
              {navigationItem.map(item => {
                return <NavigationItem title={item.title} linkTo={item.linkTo} key={item.linkTo}/>
              })}
            </div>
          </div>
        )}
        <Switch>
          <Route path='/se-smartphones' component={Smartphones} />
          <Route path='/se-laptops' component={Laptops} />
          <Route path='/se-discount' component={Discount} />
          <Route path='/' exact component={MainPage} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
}

export default App;
