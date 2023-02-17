import React from 'react';
import { createAppContainer } from 'react-navigation';
// import MainNavigation from './MainNavigation';
import DrawerNavigation from './MainNavigation';

export const AppContainer = createAppContainer(DrawerNavigation);

export const FlashApp = () => {
  return (
    <React.Fragment>
      <AppContainer />
    </React.Fragment>
  );
};
