import React from 'react';
import { Provider } from 'react-redux';
import { Scene } from './components/Viewer/Scene';
import { Toolbar } from './components/UI/Toolbar';
import { Controls } from './components/UI/Controls';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen bg-gray-100">
        <div className="relative w-full h-full">
          <Scene />
          <Toolbar />
          <Controls />
        </div>
      </div>
    </Provider>
  );
}