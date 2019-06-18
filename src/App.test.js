import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/React';
import App from './App';
import { fireEvent } from '@testing-library/react/dist';
import '@testing-library/react/cleanup-after-each';

describe('App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders without errors', () => {
    const queries = render(<App />);
    console.log('\n*** queries', queries);

    queries.getByText(/hello world/i);
  });

  it('renders without failing', () => {
    render(<App />);
  });




});
describe('Greet Button', () => {
  it('says hello developers', () => {
    const { getByText, queryByText } = render(<App />);

    const button = getByText(/greet/i);

    fireEvent.click(button);

    expect(queryByText(/hello developers/i)).toBeTruthy();
  });
});

