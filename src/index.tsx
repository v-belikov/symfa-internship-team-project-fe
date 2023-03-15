import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from '@ant-design/cssinjs';
import { store } from './app/store';
import { router } from './router';

import './styles/global/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StyleProvider>
  </React.StrictMode>,
);
