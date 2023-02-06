import React from 'react';

import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import './App.css';

export function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
