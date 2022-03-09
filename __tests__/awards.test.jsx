import { Provider } from 'react-redux'
import { render, screen, fireEvent, getAllByRole } from '@testing-library/react'
import configureStore from 'redux-mock-store'

import AwardsPage from "../pages/awards"

describe('Awards', () => {
  const initialState = { award: { items: [] } };
  const mockStore = configureStore();

  let store = mockStore(initialState);
  it('renders a heading', () => {
    render(
      <Provider store={store}>
        <AwardsPage />
      </Provider>
    );

    const heading = screen.getByRole('heading', {
      name: /awards 2021/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('outputs no result', () => {
    render(
      <Provider store={store}>
        <AwardsPage />
      </Provider>
    );
    const submitButton = screen.getByTestId('submit-ballot');
    fireEvent.click(submitButton);

    const noResultHeading = screen.getByRole('heading', { name: /no selected items/gi });
    expect(noResultHeading).toBeInTheDocument();
  })

  it('outputs success result', () => {
    render(
      <Provider store={store}>
        <AwardsPage />
      </Provider>
    );

    setTimeout(() => {
      const anySelectButton = screen.getAllByText(/select/i, { label: 'select-nominee' })[0];
      fireEvent.click(anySelectButton);

      const successResultHeading = screen.getByRole('heading', { name: /success/gi });
      expect(successResultHeading).toBeInTheDocument();
    }, 2000);
  })
})