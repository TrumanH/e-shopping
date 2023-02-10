import React, {ReactElement} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {render, RenderOptions} from '@testing-library/react';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
          {children}
      </Provider>
    </BrowserRouter>
  ) 
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};