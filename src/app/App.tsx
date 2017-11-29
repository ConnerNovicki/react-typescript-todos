import * as React from 'react';
import { AppRouter } from './Router';
import { BaseComponent } from './Utils';

class App extends BaseComponent {
  render() {
    return (
      <AppRouter/>
    );
  }
}

export default App;
