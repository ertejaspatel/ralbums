import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('full app rendering/navigating', () => {
  const {container} = render(<App />)
  expect(container.innerHTML).toMatch('<h1>Welcome</h1>')
})

test('renders menu', () => {
  const { getByText } = render(<App />);
  
  const homeMenu = getByText(/Home/i);
  expect(homeMenu).toBeInTheDocument();

  const albumsMenu = getByText(/Albums/i);
  expect(albumsMenu).toBeInTheDocument();
});