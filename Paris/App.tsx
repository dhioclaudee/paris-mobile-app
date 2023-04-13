import React, {Component} from 'react';
import CoreComponents from './src/CoreComponents';
import Grid from './src/Grid';
import Main from './src/Main';
import SignIn from './src/screnns/SignIn';
import Register from './src/screnns/Register';
import UsersList from './src/components/molecules/UserList';

const App = () => {
  return (
    // <SignIn />
    // <CoreComponents
    //   title="This is props!"
    //   subtitle="Mobile Programming Class"
    // />
    //<Grid />
    //<Main />
    //<SignIn />
    //<Register />
    <UsersList />
  );
};

export default App;